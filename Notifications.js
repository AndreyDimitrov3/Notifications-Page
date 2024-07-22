document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('allRead').addEventListener('click', markAllAsRead);
    function markAllAsRead(){
        document.querySelectorAll('.unreadNotification, .circle').forEach(function(el){
            el.classList.remove('unreadNotification', 'circle');
        });
        document.getElementById('notifications').innerText = '0';
    };

    document.querySelectorAll('.unreadNotification').forEach(function(el) {
        const handleClick = function() {
            let notificationsCount = Number(document.getElementById('notifications').innerText);
            el.classList.remove('unreadNotification', 'circle');
            // Update notifications count
            notificationsCount -= 1;
            if (notificationsCount <= 0){
                notificationsCount = 0;
            }
            document.getElementById('notifications').innerText = notificationsCount;
            el.removeEventListener('click', handleClick);
        };
        el.addEventListener('click', handleClick);

        el.addEventListener('click', function() {
            el.querySelector('.circle').classList.add('hidden');
        });
    });
});

// document.addEventListener('DOMContentLoaded', function() {

//     document.getElementById('allRead').addEventListener('click', markAllAsRead);
//     function markAllAsRead() {
//         document.querySelectorAll('.unreadNotification, .circle').forEach(function(el) {
//             el.classList.remove('unreadNotification', 'circle');
//         });
//         document.getElementById('notifications').innerText = '0';
//     }

//     document.querySelectorAll('.unreadNotification').forEach(function(el) {
//         const handleClick = function() {
//             let notificationsCount = Number(document.getElementById('notifications').innerText);
//             el.classList.remove('unreadNotification', 'circle');
//             notificationsCount -= 1;
//             if (notificationsCount <= 0) {
//                 notificationsCount = 0;
//             }
//             document.getElementById('notifications').innerText = notificationsCount;
//             el.removeEventListener('click', handleClick);
//         };
//         el.addEventListener('click', handleClick);

//         el.addEventListener('click', function() {
//             el.querySelector('.circle').classList.add('hidden');
//         });
//     });
// });