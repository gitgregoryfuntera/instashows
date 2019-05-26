window.onload = () => {
    const content = document.getElementById('content');
    const contentLoader = document.getElementById('content-skeleton-loader');

    const latestShow = document.getElementById('latest-show');
    const suggestedShow = document.getElementById('suggested-show');
    const suggestedLoader = document.getElementById('suggested-skeleton-loader');
    
    contentLoader.style.display = 'block';
    content.style.display = 'none';

    suggestedLoader.style.display = 'block';
    latestShow.style.display = 'none';
    suggestedShow.style.display = 'none';


    setTimeout(() => {
        contentLoader.style.display = 'none';
        content.style.display = 'block';

        suggestedLoader.style.display = 'none';
        latestShow.style.display = 'block';
        suggestedShow.style.display = 'block';
    }, 2000);
};




