function workingSlide(element) {
    const className = element.className;
    const number = className.match(/\d+$/)?.[0];

    if (!number) return;

    const el = document.querySelector(`.work${number}`);
    const els = document.querySelector(`.working-extra${number}`);
    const workImg = document.querySelector(`.workicon${number}`);

    const isPlus = workImg.src.includes('Plus%20icon.svg') || workImg.src.includes('Plus icon.svg');

    if (isPlus) {
        workImg.src = 'Assets/working icon/minus icon.svg';
        el.style.backgroundColor = '#B9FF66';
        el.style.height = '279px';

        els.classList.add('active');
        els.innerHTML = `
            <hr style="margin-left: 4%; width:90%; height:1px; background-color:black; border:none;">
            <p style="margin-left: 4%">
                During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing <br>
                efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
            </p>
        `;
    } else {
        workImg.src = 'Assets/working icon/Plus icon.svg';
        el.style.backgroundColor = '';
        el.style.height = '';

        els.classList.remove('active');
        setTimeout(() => {
            els.innerHTML = '';
        }, 400);
    }
}
