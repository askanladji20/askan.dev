/* =====================================================
   MOHAMMAD ASKAN - AI CHATBOT
   Personal Assistant for Portfolio
   ===================================================== */

document.addEventListener('DOMContentLoaded', function() {

    // ===== Chatbot Elements =====
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatInput = document.getElementById('chatInput');
    const sendMessageBtn = document.getElementById('sendMessage');

    // ===== Askan's Data (Resume Information) =====
    const askanData = {
        name: "Mohammad Askan Riyaz Ahmed Ladji",
        shortName: "Askan",
        title: "Android & Java Developer",
        email: "askanladji20@gmail.com",
        phone: "+91 8208901884",
        location: "Pune, India"
    };

    // ===== Chatbot Knowledge Base =====
    const responses = {
        // Greetings
        greetings: {
            patterns: ['hi', 'hello', 'hey', 'hola', 'namaste', 'good morning', 'good afternoon', 'good evening', 'howdy', 'greetings', 'sup', 'yo'],
            responses: [
                `👋 Hello! I'm ${askanData.shortName}'s virtual assistant. How can I help you today? You can ask about his skills, experience, or projects!`,
                `Hi there! Welcome to ${askanData.shortName}'s portfolio. What would you like to know about him?`,
                `Hey! Great to meet you! I can tell you about ${askanData.shortName}'s skills in Android & Java development, experience, projects, and more!`
            ]
        },

        // About/Who
        about: {
            patterns: ['who is askan', 'who are you', 'about', 'tell me about', 'introduce', 'yourself', 'who is he', 'about askan', 'about him', 'who is mohammad'],
            responses: [
                `**${askanData.name}** is an **Android & Java Developer** based in ${askanData.location}.\n\nHe has hands-on experience in designing, developing, and maintaining scalable Android applications and Java-based business logic systems.\n\n**Expertise:**\n• Core Java, OOP, Collections, Multithreading\n• Android SDK, Kotlin, Jetpack Compose\n• MVVM, Clean Architecture\n• SDK Development & Enterprise Apps`,
                `Let me introduce ${askanData.shortName}! 🚀\n\nHe's an experienced **Android & Java Developer** with strong expertise in:\n\n☕ **Java:** Core Java, OOP, Collections, Multithreading\n📱 **Android:** Kotlin, Jetpack Compose, MVVM, SDK Development\n\nCurrently working at Nstore Retech Pvt. Ltd. building enterprise-grade applications!`
            ]
        },

        // Skills
        skills: {
            patterns: ['skill', 'skills', 'technologies', 'tech stack', 'what can you do', 'what do you know', 'programming', 'languages', 'expertise', 'technical skills', 'what technologies', 'your skills'],
            responses: [
                `🚀 **${askanData.shortName}'s Technical Skills:**\n\n☕ **Java Expertise:**\n• Core Java & OOP Concepts\n• Collections Framework\n• Exception Handling\n• Multithreading Basics\n• Design Patterns\n• Lambda & Stream API\n\n📱 **Android Development:**\n• Kotlin & Java\n• Jetpack Compose & XML\n• MVVM & Clean Architecture\n• Room DB, Retrofit, Hilt\n• SDK Development\n\n🛠️ **Tools:** Android Studio, IntelliJ IDEA, Git, Firebase, Gradle\n\n🗄️ **Database:** SQLite, Room, Firebase, MySQL`,
                `**${askanData.shortName}** is skilled in both **Android & Java**!\n\n**☕ Java Skills:**\n• Core Java, OOP, Collections\n• Multithreading, Exception Handling\n• Generics, Design Patterns\n• REST API Development\n\n**📱 Android Skills:**\n• Kotlin, Jetpack Compose\n• MVVM, Clean Architecture\n• Room DB, Retrofit, Coroutines\n• SDK Development, MDM Systems\n\n**🔧 Tools:**\nAndroid Studio, IntelliJ IDEA, Git, GitHub, Firebase`
            ]
        },

        // Java specific
        java: {
            patterns: ['java', 'core java', 'oops', 'oop', 'java developer', 'java skills', 'collections', 'multithreading', 'java expertise'],
            responses: [
                `☕ **${askanData.shortName}'s Java Expertise:**\n\n**Core Java:**\n• Object-Oriented Programming (OOP)\n• Classes, Objects, Inheritance, Polymorphism\n• Abstraction & Encapsulation\n\n**Advanced Java:**\n• Collections Framework (List, Set, Map)\n• Exception Handling\n• Multithreading Basics\n• Generics & Lambda Expressions\n• Stream API\n• Design Patterns\n\n**Experience:**\nWorked as **Java Developer at AGS Transact Technologies** building transaction systems, REST APIs, and complex business logic!\n\n**Certification:** Full Stack Java from Apna College ✅`,
                `**${askanData.shortName}** has **strong Java expertise**! ☕\n\n✅ Core Java & OOP Concepts\n✅ Collections Framework\n✅ Exception Handling\n✅ Multithreading Fundamentals\n✅ Lambda & Stream API\n✅ Design Patterns\n✅ REST API Development in Java\n\nHe worked as a **Java Developer at AGS Transact Technologies** where he built enterprise transaction systems!`
            ]
        },

        // Android specific
        android: {
            patterns: ['android', 'kotlin', 'jetpack', 'compose', 'mobile', 'app development', 'sdk', 'android developer', 'android development'],
            responses: [
                `📱 **${askanData.shortName}'s Android Development Skills:**\n\n**Languages:** Kotlin & Java\n\n**UI Development:**\n• Jetpack Compose\n• XML Layouts\n• Material Design\n• Custom Views\n\n**Architecture:**\n• MVVM Pattern\n• Clean Architecture\n• Repository Pattern\n\n**Libraries & Tools:**\n• Room Database\n• Retrofit for APIs\n• Hilt/Dagger for DI\n• Coroutines & Flow\n• LiveData & ViewModel\n• Navigation Component\n\n**Specialized:**\n• SDK Development\n• MDM Systems\n• Enterprise Apps`,
                `**${askanData.shortName}** is an expert **Android Developer**! 📱\n\n✅ Native Android (Kotlin + Java)\n✅ Jetpack Compose & XML UI\n✅ MVVM & Clean Architecture\n✅ Custom SDK Development\n✅ API Integration (Retrofit)\n✅ Local DB (Room, SQLite)\n✅ Dependency Injection (Hilt)\n✅ MDM & Enterprise Solutions\n\nCurrently building core banking & CRM apps at Nstore Retech!`
            ]
        },

        // Experience
        experience: {
            patterns: ['experience', 'work', 'job', 'career', 'employment', 'worked', 'working', 'company', 'companies', 'professional', 'your experience'],
            responses: [
                `💼 **${askanData.shortName}'s Professional Experience:**\n\n**1. Android Developer** (Current) 📱\n📍 Nstore Retech Pvt. Ltd. | March 2025 - Present\n• Building banking & CRM apps using Kotlin\n• SDK Development\n• MDM Systems\n• Clean MVVM Architecture\n\n**2. Java Developer** ☕\n📍 AGS Transact Technologies | June 2024 - March 2025\n• Transaction systems using Java\n• REST APIs development\n• Business logic in Core Java\n• Performance optimization\n\n**3. Software Developer Intern**\n📍 AGS Transact Technologies | Sept - Nov 2023\n• Flutter development\n• Java-based Android modules\n• Firebase integration`,
                `**${askanData.shortName}** has **2+ years** of experience as both **Android & Java Developer**!\n\n☕ **As Java Developer (AGS Transact):**\n• Built transaction & automation systems\n• Developed REST APIs\n• Implemented business logic in Core Java\n\n📱 **As Android Developer (Nstore Retech):**\n• Building enterprise banking apps\n• Creating custom SDKs\n• Implementing MVVM architecture\n\nHe's experienced in both **backend Java** and **mobile Android** development!`
            ]
        },

        // Projects
        projects: {
            patterns: ['project', 'projects', 'portfolio', 'work samples', 'what have you built', 'apps', 'applications', 'built', 'your projects'],
            responses: [
                `🎯 **${askanData.shortName}'s Featured Projects:**\n\n**1. Comico: Comic Book App** 📚\n• Purchase, read & stream comics\n• Built with Kotlin, Jetpack Compose\n• REST API integration\n• Advanced caching\n\n**2. Mental Health Assessment Tool** 🧠\n• AI-based health assessment\n• GNN & CNN models\n• Python, Machine Learning\n• High accuracy evaluations\n\n**3. Expense Splitter App** 💰\n• Real-time expense sharing\n• Flutter, Dart, Firebase\n• State management with Provider\n\n**Enterprise Projects:**\n• Banking & CRM Apps (Kotlin/Java)\n• Custom Android SDKs\n• Transaction Systems (Java)`,
                `**${askanData.shortName}** has worked on exciting projects! 🚀\n\n📚 **Comico App:** Comic book platform with Kotlin & Jetpack Compose\n\n🧠 **Mental Health Tool:** AI-based assessment using CNN/GNN\n\n💰 **Expense Splitter:** Real-time sharing with Flutter & Firebase\n\n🏢 **Enterprise Work:**\n• Banking & CRM Android apps\n• Custom SDK development\n• Java-based transaction systems`
            ]
        },

        // Education
        education: {
            patterns: ['education', 'study', 'college', 'university', 'degree', 'qualification', 'academic', 'school', 'graduated'],
            responses: [
                `🎓 **${askanData.shortName}'s Education:**\n\n**B.E. in Computer Engineering**\n📍 Watumull Institute of Electronic Engineering\n📅 2021 - 2024 | Mumbai\n• Software engineering principles\n• Advanced algorithms\n• System design methodologies\n\n**Diploma in Computer Engineering**\n📍 VPM's Polytechnic\n📅 2018 - 2021 | Thane\n• Programming fundamentals\n• Database systems\n• Application development`
            ]
        },

        // Achievements
        achievements: {
            patterns: ['achievement', 'achievements', 'awards', 'recognition', 'accomplishments', 'hackathon', 'won', 'winner'],
            responses: [
                `🏆 **${askanData.shortName}'s Achievements:**\n\n🥇 **CodeVengers Hackathon Winner**\nLed Android team to victory under strict timelines!\n\n🚀 **Smart India Hackathon 2023**\nRepresented institute with high-impact Android project\n\n⭐ **AGS Recognition**\nRecognized for developing reusable SDK modules that improved development speed`
            ]
        },

        // Certificates
        certificates: {
            patterns: ['certificate', 'certificates', 'certifications', 'courses', 'training', 'certified'],
            responses: [
                `📜 **${askanData.shortName}'s Certifications:**\n\n✅ **Android Development** (Udemy)\n• App design, Kotlin, Jetpack, APIs\n\n✅ **Full Stack Java** (Apna College)\n• Core Java, OOP, Advanced concepts\n\n✅ **SQL for Data Analytics**\n• Advanced SQL queries & analytics\n\n✅ **Advanced Python** (Udemy)\n• Automation & data analysis`
            ]
        },

        // Contact
        contact: {
            patterns: ['contact', 'email', 'phone', 'reach', 'hire', 'connect', 'get in touch', 'call', 'message', 'how can i contact'],
            responses: [
                `📞 **Get in Touch with ${askanData.shortName}:**\n\n📧 **Email:** ${askanData.email}\n📱 **Phone:** ${askanData.phone}\n📍 **Location:** ${askanData.location}\n\n💼 **LinkedIn:** linkedin.com/in/askan\n💻 **GitHub:** github.com/askan\n\nHe's available for **Android & Java Developer** roles!\nFeel free to reach out for opportunities!`,
                `**Want to hire ${askanData.shortName}?**\n\n📧 Email: ${askanData.email}\n📱 Phone: ${askanData.phone}\n📍 Location: ${askanData.location}\n\nHe's open to discussing new projects and opportunities in both Android and Java development!`
            ]
        },

        // Location
        location: {
            patterns: ['where', 'location', 'city', 'based', 'live', 'from'],
            responses: [
                `📍 **${askanData.shortName}** is based in **${askanData.location}**.\n\nHe's open to:\n• On-site opportunities in Pune/Mumbai\n• Remote work\n• Hybrid arrangements\n\nReach out at ${askanData.email}!`
            ]
        },

        // Hire/Available
        hire: {
            patterns: ['available', 'freelance', 'job opportunity', 'open to work', 'looking for', 'recruit'],
            responses: [
                `💼 **${askanData.shortName}** is open to exciting opportunities!\n\n**Roles Interested In:**\n📱 Android Developer\n☕ Java Developer\n🔧 SDK Developer\n📲 Mobile App Developer\n\n**Contact:**\n📧 ${askanData.email}\n📱 ${askanData.phone}\n\nLet's build something amazing together!`
            ]
        },

        // Why hire
        whyHire: {
            patterns: ['why hire', 'why should', 'what makes you special', 'strengths', 'why choose'],
            responses: [
                `🌟 **Why Hire ${askanData.shortName}?**\n\n✅ **Dual Expertise** - Both Android & Java Developer\n✅ **2+ years** of professional experience\n✅ **Hackathon Winner** - Proven problem solver\n✅ **SDK Development** expertise\n✅ **Enterprise-grade** app experience\n✅ **Clean Architecture** advocate\n✅ **Fast learner** & team player\n\nHe can handle both **mobile frontend** and **backend logic**! 🚀`
            ]
        },

        // Thanks
        thanks: {
            patterns: ['thank', 'thanks', 'thank you', 'appreciate', 'helpful', 'great'],
            responses: [
                `You're welcome! 😊 Is there anything else you'd like to know about ${askanData.shortName}?`,
                `Happy to help! Feel free to ask more or reach out at ${askanData.email}!`,
                `Glad I could help! Don't hesitate to contact ${askanData.shortName} for opportunities!`
            ]
        },

        // Goodbye
        goodbye: {
            patterns: ['bye', 'goodbye', 'see you', 'later', 'exit', 'quit'],
            responses: [
                `Goodbye! 👋 Thanks for visiting! Reach out at ${askanData.email} anytime!`,
                `See you later! 😊 Connect with ${askanData.shortName} on LinkedIn!`,
                `Bye! Thanks for your interest in ${askanData.shortName}'s portfolio!`
            ]
        },

        // Default/Fallback
        default: {
            responses: [
                `I'm not sure I understand that. Try asking about:\n\n• 🎯 Skills\n• ☕ Java expertise\n• 📱 Android development\n• 💼 Experience\n• 🚀 Projects\n• 📞 Contact\n\nOr use the quick reply buttons!`,
                `Hmm, I didn't get that. Ask about ${askanData.shortName}'s skills, experience, projects, or contact info!`
            ]
        }
    };

    // ===== Get Response Based on User Input =====
    function getResponse(userMessage) {
        const message = userMessage.toLowerCase().trim();

        // Check each category for matching patterns
        for (const category in responses) {
            if (category === 'default') continue;

            const patterns = responses[category].patterns;
            if (patterns) {
                for (const pattern of patterns) {
                    if (message.includes(pattern)) {
                        const categoryResponses = responses[category].responses;
                        return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
                    }
                }
            }
        }

        // Return default response
        return responses.default.responses[Math.floor(Math.random() * responses.default.responses.length)];
    }

    // ===== Add Message to Chat =====
    function addMessage(content, isUser = false) {
        // Remove existing quick replies
        const existingQuickReplies = chatbotMessages.querySelector('.quick-replies');
        if (existingQuickReplies) {
            existingQuickReplies.remove();
        }

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;

        // Format message with markdown-like syntax
        let formattedContent = content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');

        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${formattedContent}</p>
            </div>
        `;

        chatbotMessages.appendChild(messageDiv);
        scrollToBottom();
    }

    // ===== Show Typing Indicator =====
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-message';
        typingDiv.innerHTML = `
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        chatbotMessages.appendChild(typingDiv);
        scrollToBottom();
        return typingDiv;
    }

    // ===== Remove Typing Indicator =====
    function removeTypingIndicator(typingDiv) {
        if (typingDiv && typingDiv.parentElement) {
            typingDiv.remove();
        }
    }

    // ===== Add Quick Replies =====
    function addQuickReplies() {
        // Remove existing quick replies first
        const existingQuickReplies = chatbotMessages.querySelector('.quick-replies');
        if (existingQuickReplies) {
            existingQuickReplies.remove();
        }

        const quickRepliesDiv = document.createElement('div');
        quickRepliesDiv.className = 'quick-replies';
        quickRepliesDiv.innerHTML = `
            <button class="quick-reply" data-message="What are your skills?">Skills</button>
            <button class="quick-reply" data-message="Tell me about Java expertise">Java</button>
            <button class="quick-reply" data-message="Tell me about Android development">Android</button>
            <button class="quick-reply" data-message="Tell me about your experience">Experience</button>
            <button class="quick-reply" data-message="Show me your projects">Projects</button>
            <button class="quick-reply" data-message="How can I contact you?">Contact</button>
        `;
        chatbotMessages.appendChild(quickRepliesDiv);

        // Add event listeners to quick replies
        quickRepliesDiv.querySelectorAll('.quick-reply').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const message = this.getAttribute('data-message');
                if (message) {
                    handleUserMessage(message);
                }
            });
        });

        scrollToBottom();
    }

    // ===== Scroll to Bottom =====
    function scrollToBottom() {
        setTimeout(() => {
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 100);
    }

    // ===== Handle User Message =====
    function handleUserMessage(message) {
        if (!message || !message.trim()) return;

        const trimmedMessage = message.trim();

        // Add user message
        addMessage(trimmedMessage, true);

        // Clear input immediately
        if (chatInput) {
            chatInput.value = '';
            chatInput.focus();
        }

        // Show typing indicator
        const typingIndicator = showTypingIndicator();

        // Simulate response delay
        const delay = Math.random() * 800 + 600;

        setTimeout(() => {
            removeTypingIndicator(typingIndicator);

            // Get and add bot response
            const response = getResponse(trimmedMessage);
            addMessage(response, false);

            // Add quick replies after response
            setTimeout(() => {
                addQuickReplies();
            }, 200);

        }, delay);
    }

    // ===== Initialize Quick Replies =====
    function initializeQuickReplies() {
        const initialQuickReplies = document.querySelectorAll('.quick-replies .quick-reply');
        initialQuickReplies.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const message = this.getAttribute('data-message');
                if (message) {
                    handleUserMessage(message);
                }
            });
        });
    }

    // ===== Event Listeners =====

    // Toggle chatbot window
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            chatbotWindow.classList.toggle('active');

            const icon = chatbotToggle.querySelector('i');
            if (chatbotWindow.classList.contains('active')) {
                icon.className = 'fas fa-times';
                // Remove notification if exists
                const notification = document.querySelector('.chatbot-notification');
                if (notification) notification.remove();
            } else {
                icon.className = 'fas fa-robot';
            }
        });
    }

    // Close chatbot
    if (chatbotClose) {
        chatbotClose.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            chatbotWindow.classList.remove('active');
            const icon = chatbotToggle.querySelector('i');
            icon.className = 'fas fa-robot';
        });
    }

    // Send message on button click
    if (sendMessageBtn) {
        sendMessageBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (chatInput && chatInput.value.trim()) {
                handleUserMessage(chatInput.value);
            }
        });
    }

    // Send message on Enter key
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (this.value.trim()) {
                    handleUserMessage(this.value);
                }
            }
        });

        chatInput.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Prevent clicks inside chatbot from closing it
    if (chatbotWindow) {
        chatbotWindow.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && chatbotWindow && chatbotWindow.classList.contains('active')) {
            chatbotWindow.classList.remove('active');
            const icon = chatbotToggle.querySelector('i');
            if (icon) icon.className = 'fas fa-robot';
        }
    });

    // Close when clicking outside
    document.addEventListener('click', function(e) {
        if (chatbotWindow && chatbotWindow.classList.contains('active')) {
            const chatbotContainer = document.getElementById('chatbot');
            if (chatbotContainer && !chatbotContainer.contains(e.target)) {
                chatbotWindow.classList.remove('active');
                const icon = chatbotToggle.querySelector('i');
                if (icon) icon.className = 'fas fa-robot';
            }
        }
    });

    // Initialize
    initializeQuickReplies();

    // ===== Auto Notification Popup =====
    setTimeout(() => {
        if (chatbotWindow && !chatbotWindow.classList.contains('active')) {
            const chatbotContainer = document.getElementById('chatbot');
            if (!chatbotContainer) return;

            // Remove existing notification
            const existingNotification = chatbotContainer.querySelector('.chatbot-notification');
            if (existingNotification) existingNotification.remove();

            const notification = document.createElement('div');
            notification.className = 'chatbot-notification';
            notification.innerHTML = `
                <p>👋 Hi! Ask me about Askan's skills!</p>
                <button class="close-notification">&times;</button>
            `;

            chatbotContainer.appendChild(notification);

            // Close button
            const closeBtn = notification.querySelector('.close-notification');
            if (closeBtn) {
                closeBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    notification.remove();
                });
            }

            // Open chatbot on notification click
            notification.addEventListener('click', function(e) {
                e.stopPropagation();
                chatbotWindow.classList.add('active');
                const icon = chatbotToggle.querySelector('i');
                if (icon) icon.className = 'fas fa-times';
                notification.remove();
            });

            // Auto hide
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.style.opacity = '0';
                    notification.style.transform = 'translateY(10px)';
                    setTimeout(() => notification.remove(), 300);
                }
            }, 6000);
        }
    }, 4000);

    console.log('%c🤖 Chatbot Ready!', 'color: #a855f7; font-size: 14px; font-weight: bold;');

});