// تم دمج كل أكواد الجافاسكريبت هنا
        window.addEventListener('DOMContentLoaded', (event) => {
            // --- 1. كود شاشة البداية ---
            const splashScreen = document.getElementById('splash-screen');
            const mainContent = document.getElementById('main-content');
            const splashTextElement = document.getElementById('splash-text');
            const textToType = "أهلاً بكم في عالم تلتقي فيه البيانات بالإبداع ";
            let index = 0;

            function typeWriter() {
                if (index < textToType.length) {
                    splashTextElement.innerHTML += textToType.charAt(index);
                    index++;
                    setTimeout(typeWriter, 50);
                }
            }
            setTimeout(typeWriter, 1000);

            setTimeout(() => {
                splashScreen.classList.add('slide-out');
                mainContent.classList.add('slide-in');
                // السماح بالتمرير بعد انتهاء الحركة
                setTimeout(()=> { document.body.style.overflow = 'auto'; }, 500);
            }, 4000);

            // --- 2. كود العداد التنازلي ---
            const launchDate = new Date(2025, 8, 1).getTime(); // 1 سبتمبر 2025
            const countdownFunction = setInterval(() => {
                const now = new Date().getTime();
                const distance = launchDate - now;
                if (distance < 0) {
                    clearInterval(countdownFunction);
                    document.getElementById("countdown").innerHTML = "<h1 class='main-h1'>لقد انطلقنا!</h1>";
                    return;
                }
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                document.getElementById("countdown").innerHTML = `<div class="time-unit"><span>${days}</span><small>يوم</small></div><div class="time-unit"><span>${hours}</span><small>ساعة</small></div><div class="time-unit"><span>${minutes}</span><small>دقيقة</small></div><div class="time-unit"><span>${seconds}</span><small>ثانية</small></div>`;
            }, 1000);

            // --- 3. كود نموذج الاشتراك والنافذة المنبثقة ---
            var form = document.getElementById("subscribe-form");
            var modal = document.getElementById("success-modal");
            var closeModalBtn = document.getElementById("close-modal-btn");
            function showModal() { form.reset(); modal.style.display = "flex"; }
            function hideModal() { modal.style.display = "none"; }
            closeModalBtn.addEventListener("click", hideModal);
            window.addEventListener("click", function(event) { if (event.target == modal) { hideModal(); } });
            form.addEventListener("submit", function(ev) {
                ev.preventDefault();
                var data = new FormData(form);
                var xhr = new XMLHttpRequest();
                xhr.open("POST", "https://formspree.io/f/xpwllryo");
                xhr.setRequestHeader("Accept", "application/json");
                xhr.onreadystatechange = function() {
                    if (xhr.readyState !== XMLHttpRequest.DONE) return;
                    if (xhr.status === 200) { showModal(); } else { alert("عذراً، حدث خطأ ما."); }
                };
                xhr.send(data);
            });
        });