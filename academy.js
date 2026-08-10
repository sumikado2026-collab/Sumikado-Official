document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (event) => {
        const target = event.target.closest('[data-action]');
        if (!target) return;

        if (target.dataset.action === 'open-lesson') {
            event.preventDefault();
            toggleLessonModal(target.dataset.lesson);
        }

        if (target.dataset.action === 'close-lesson') {
            event.preventDefault();
            toggleLessonModal();
        }
    });

    document.querySelectorAll('[data-action="open-lesson"]').forEach((item) => {
        item.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            toggleLessonModal(item.dataset.lesson);
        });
    });

    const modal = document.getElementById('lessonModal');
    modal?.addEventListener('click', (event) => {
        if (event.target === modal) toggleLessonModal();
    });
});
