document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    const breathingBtn = document.getElementById('breathingBtn');
    const breathingCircle = document.getElementById('breathingCircle');
    const breathingText = document.getElementById('breathingText');

    if (breathingBtn && breathingCircle && breathingText) {
        let isBreathing = false;
        let timeout = null;

        breathingBtn.addEventListener('click', function() {
            if (!isBreathing) {
                isBreathing = true;
                breathingBtn.textContent = 'Stop Exercise';
                startBreathing();
            } else {
                isBreathing = false;
                breathingBtn.textContent = 'Start Breathing Exercise';
                breathingCircle.classList.remove('breathing-in', 'breathing-hold', 'breathing-out');
                breathingText.textContent = 'Press Start to Begin';
                if (timeout) clearTimeout(timeout);
            }
        });

        function startBreathing() {
            if (!isBreathing) return;
            
            breathingCircle.className = 'breathing-circle breathing-in';
            breathingText.textContent = 'Breathe In...';
            
            timeout = setTimeout(() => {
                if (!isBreathing) return;
                breathingCircle.className = 'breathing-circle breathing-hold';
                breathingText.textContent = 'Hold...';
                
                timeout = setTimeout(() => {
                    if (!isBreathing) return;
                    breathingCircle.className = 'breathing-circle breathing-out';
                    breathingText.textContent = 'Breathe Out...';
                    
                    timeout = setTimeout(() => {
                        if (isBreathing) {
                            startBreathing();
                        }
                    }, 8000);
                }, 4000);
            }, 4000);
        }
    }

    const quoteCards = document.querySelectorAll('.quote-card');
    const prevBtn = document.getElementById('prevQuote');
    const nextBtn = document.getElementById('nextQuote');

    if (quoteCards.length > 0) {
        let currentQuote = 0;
        quoteCards[0].classList.add('active');

        function showQuote(index) {
            quoteCards.forEach(card => card.classList.remove('active'));
            if (quoteCards[index]) {
                quoteCards[index].classList.add('active');
            }
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                currentQuote = (currentQuote + 1) % quoteCards.length;
                showQuote(currentQuote);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                currentQuote = (currentQuote - 1 + quoteCards.length) % quoteCards.length;
                showQuote(currentQuote);
            });
        }

        if (quoteCards.length > 1) {
            setInterval(function() {
                currentQuote = (currentQuote + 1) % quoteCards.length;
                showQuote(currentQuote);
            }, 5000);
        }
    }

    const commentForm = document.getElementById('commentForm');
    const commentsList = document.getElementById('commentsList');

    if (commentForm && commentsList) {
        let commentIdCounter = Date.now();
        const getNextId = () => commentIdCounter++;

        const comments = [
            {
                id: getNextId(),
                name: 'Taylor',
                message: 'Taking a minute to breathe before homework keeps me from spiraling. Give yourself a break when you need one.',
                likes: 7,
                createdAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
                replies: [
                    {
                        id: getNextId(),
                        name: 'Sam',
                        message: 'I started doing this too. It makes studying feel way less scary.',
                        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString()
                    }
                ],
                isReplying: false
            },
            {
                id: getNextId(),
                name: 'Jordan',
                message: "Reminder: it's okay to have an off day. Resting is part of healing.",
                likes: 4,
                createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
                replies: [],
                isReplying: false
            }
        ];

        const nameInput = commentForm.querySelector('#commentName');
        const messageInput = commentForm.querySelector('#commentMessage');

        commentForm.addEventListener('submit', event => {
            event.preventDefault();

            const name = nameInput.value.trim();
            const message = messageInput.value.trim();

            if (!message) {
                messageInput.focus();
                return;
            }

            comments.unshift({
                id: getNextId(),
                name,
                message,
                likes: 0,
                createdAt: new Date().toISOString(),
                replies: [],
                isReplying: false
            });

            nameInput.value = '';
            messageInput.value = '';
            renderComments();
        });

        commentsList.addEventListener('click', event => {
            const actionButton = event.target.closest('[data-action]');
            if (!actionButton) return;

            const action = actionButton.dataset.action;
            const commentId = Number(actionButton.dataset.id);
            const comment = comments.find(item => item.id === commentId);

            if (!comment) return;

            if (action === 'like') {
                comment.likes += 1;
                renderComments();
            } else if (action === 'reply') {
                comment.isReplying = !comment.isReplying;
                renderComments();
            } else if (action === 'cancel-reply') {
                comment.isReplying = false;
                renderComments();
            } else if (action === 'submit-reply') {
                const panel = actionButton.closest('.reply-panel');
                if (!panel) return;

                const replyNameInput = panel.querySelector('.reply-name-input');
                const replyMessageInput = panel.querySelector('.reply-message-input');

                const replyName = replyNameInput.value.trim();
                const replyMessage = replyMessageInput.value.trim();

                if (!replyMessage) {
                    replyMessageInput.focus();
                    return;
                }

                comment.replies.push({
                    id: getNextId(),
                    name: replyName,
                    message: replyMessage,
                    createdAt: new Date().toISOString()
                });

                comment.isReplying = false;
                renderComments();
            }
        });

        function renderComments() {
            commentsList.innerHTML = '';

            if (comments.length === 0) {
                const emptyState = document.createElement('p');
                emptyState.className = 'comments-empty';
                emptyState.textContent = 'Be the first to share something encouraging.';
                commentsList.appendChild(emptyState);
                return;
            }

            comments.forEach(comment => {
                commentsList.appendChild(createCommentElement(comment));
            });
        }

        function createCommentElement(comment) {
            const article = document.createElement('article');
            article.className = 'comment-card';
            article.dataset.id = comment.id;

            const header = document.createElement('div');
            header.className = 'comment-header';

            const author = document.createElement('span');
            author.className = 'comment-author';
            author.textContent = comment.name || 'Anonymous';

            const time = document.createElement('span');
            time.className = 'comment-time';
            time.textContent = formatTimestamp(comment.createdAt);

            header.appendChild(author);
            header.appendChild(time);
            article.appendChild(header);

            const body = document.createElement('p');
            body.className = 'comment-body';
            body.textContent = comment.message;
            article.appendChild(body);

            const actions = document.createElement('div');
            actions.className = 'comment-actions';

            const likeButton = document.createElement('button');
            likeButton.className = 'comment-action like-btn';
            likeButton.dataset.action = 'like';
            likeButton.dataset.id = comment.id;
            likeButton.setAttribute('aria-label', 'Like comment');
            likeButton.innerHTML = `❤️ <span>${comment.likes}</span>`;

            const replyButton = document.createElement('button');
            replyButton.className = 'comment-action reply-btn';
            replyButton.dataset.action = 'reply';
            replyButton.dataset.id = comment.id;
            replyButton.textContent = comment.isReplying ? 'Close Reply' : 'Reply';

            actions.appendChild(likeButton);
            actions.appendChild(replyButton);
            article.appendChild(actions);

            const replyPanel = document.createElement('div');
            replyPanel.className = 'reply-panel';
            replyPanel.dataset.id = comment.id;
            replyPanel.hidden = !comment.isReplying;
            replyPanel.innerHTML = `
                <input type="text" class="reply-name-input" placeholder="Name (optional)">
                <textarea class="reply-message-input" rows="2" placeholder="Write a reply..."></textarea>
                <div class="reply-controls">
                    <button type="button" class="comment-action cancel-reply" data-action="cancel-reply" data-id="${comment.id}">Cancel</button>
                    <button type="button" class="comment-action submit-reply" data-action="submit-reply" data-id="${comment.id}">Post Reply</button>
                </div>
            `;
            article.appendChild(replyPanel);

            if (comment.replies.length > 0) {
                const repliesContainer = document.createElement('div');
                repliesContainer.className = 'comment-replies';

                comment.replies.forEach(reply => {
                    const replyItem = document.createElement('div');
                    replyItem.className = 'reply-card';

                    const replyHeader = document.createElement('div');
                    replyHeader.className = 'reply-header';

                    const replyAuthor = document.createElement('span');
                    replyAuthor.className = 'reply-author';
                    replyAuthor.textContent = reply.name || 'Anonymous';

                    const replyTime = document.createElement('span');
                    replyTime.className = 'reply-time';
                    replyTime.textContent = formatTimestamp(reply.createdAt);

                    replyHeader.appendChild(replyAuthor);
                    replyHeader.appendChild(replyTime);

                    const replyBody = document.createElement('p');
                    replyBody.className = 'reply-body';
                    replyBody.textContent = reply.message;

                    replyItem.appendChild(replyHeader);
                    replyItem.appendChild(replyBody);

                    repliesContainer.appendChild(replyItem);
                });

                article.appendChild(repliesContainer);
            }

            return article;
        }

        function formatTimestamp(isoString) {
            const date = new Date(isoString);

            if (Number.isNaN(date.getTime())) {
                return '';
            }

            return date.toLocaleString(undefined, {
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit'
            });
        }

        renderComments();
    }

});
