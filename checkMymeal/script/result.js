
document.addEventListener('DOMContentLoaded', function() {
    const resultElement = document.getElementById('result');
    const analysisResult = localStorage.getItem('analysisResult');

    if (analysisResult) {
        const lines = analysisResult.split('\n');
        let formattedResult = '';
        let inMeal = false;
        let inAdvice = false;
        let inRecommendation = false;

        lines.forEach(line => {
            line = line.trim()
                .replace(/^\d+\.\s*/, '')  // 줄 시작 부분의 숫자와 점 제거
                .replace(/:\s*/, ' ')  // 콜론과 그 뒤의 공백 제거
                .replace(/\s*-\s*/, ' ')  // '-'와 그 주변 공백을 하나의 공백으로 대체
                .replace(/\*\*/g, '');  // '**' 기호 제거

            if (line.toLowerCase().startsWith('아침') || line.toLowerCase().startsWith('점심') || line.toLowerCase().startsWith('저녁')) {
                if (inMeal) formattedResult += '</div>';
                inMeal = true;
                inAdvice = false;
                inRecommendation = false;
                formattedResult += `<div class="meal"><h2>${line}</h2>`;
            } else if (line.startsWith('###')) {
                if (inMeal) formattedResult += '</div>';
                if (inAdvice) formattedResult += '</div>';
                if (inRecommendation) formattedResult += '</div>';
                inMeal = false;
                inAdvice = line.toLowerCase().includes('조언');
                inRecommendation = line.toLowerCase().includes('추천');
                formattedResult += `<div class="${inAdvice ? 'advice' : 'recommendation'}"><h3>${line.replace('###', '')}</h3>`;
            } else if (line) {
                if (inRecommendation && (line.toLowerCase().startsWith('아침') || line.toLowerCase().startsWith('점심') || line.toLowerCase().startsWith('저녁'))) {
                    formattedResult += `<h4>${line}</h4>`;
                } else {
                    formattedResult += `<p>${line}</p>`;
                }
            }
        });

        if (inMeal || inAdvice || inRecommendation) formattedResult += '</div>';

        resultElement.innerHTML = formattedResult;
        console.log('분석 결과 표시 완료');
        localStorage.removeItem('analysisResult');
    } else {
        resultElement.textContent = '분석 결과를 찾을 수 없습니다.';
    }
});