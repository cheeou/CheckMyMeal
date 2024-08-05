const submitBtn = document.querySelector('.submit');
const modalElement = document.querySelector('#myModal');
const modalContent = document.querySelector('.modal-content');
const breakfast = document.getElementById('breakfast');
const lunch = document.getElementById('lunch');
const dinner = document.getElementById('dinner');

const URL = 'https://open-api.jejucodingcamp.workers.dev/';


let data = [
    {
        role: "system",
        content: "사용자의 건강을 위한 올바른 영양소 섭취를 위한 조언을 해준다. 말투는 친근하게 한다.",
    },
];


let sendPrompt = (menuInfo) => {
    if(menuInfo) {
        data.push({
            role: "user",
            content: menuInfo
        });
        console.log(`updated data>>>> ${JSON.stringify(data)}`)
    }
};


const loadingElement = document.getElementById('loading');

const showLoading = () => {
    loadingElement.style.display = 'flex';
};

const hideLoading = () => {
    loadingElement.style.display = 'none';
};

const getMessage = async () => {
    showLoading();
    try {
        const result = await axios({
            method: "post",
            maxBodyLength: Infinity,
            url: URL,
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify(data),
        });
        console.log(result.data);
        if(result.data.choices && result.data.choices[0].message.content) {
            localStorage.setItem('analysisResult', result.data.choices[0].message.content);
            
            window.location.href = 'result.html';
        }
    } catch (error) {
        console.log(error);
        alert('분석 중 오류가 발생했습니다.');
    } finally {
        hideLoading();
    }
};

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const meals = {
        breakfast: breakfast.value,
        lunch: lunch.value,
        dinner: dinner.value
    };
    const menuInfo = `아침: ${meals.breakfast}, 점심:${meals.lunch}, 저녁:${meals.dinner} 메뉴로 나의 섭취 영양소에 정보에 대해 판단해 주고 이런 식단을 유지하면 한달 뒤에 체중증량이나 감소가 될 수치를 알려주어서 주의를 줘. 그에 따른 조언을 해주고 부족한 주요 영양소를 요약해줘. 
                그리고 다음날 하루 식사 메뉴를 추천해줘.
                식사메뉴는 일상생활에서 접하기 쉬운 메뉴로 정해줘`;
    
    
    sendPrompt(menuInfo);
    getMessage();
});
