/**
 * 두 개 뽑아서 더하기
 *
 * 문제 URL: https://programmers.co.kr/learn/courses/30/lessons/68644
 * 정답 비율: 74.5%
 *
 * 문제 설명
 *   - 정수 배열 numbers가 주어진다
 *   - numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 반환하는 solution() 함수를 구현하라
 *
 * 제약 조건
 *   - numbers의 길이는 2 이상 100 이하이다
 *   - numbers의 모든 수는 0 이상 100 이하이다
 *
 * 입출력 예제
 *   - 입력: [2, 1, 3, 4, 1] -> 출력: [2, 3, 4, 5, 6, 7]
 *   - 입력: [5, 0, 2, 7] -> 출력: [2, 5, 7, 9, 12]
 */

const solution = (numbers) => {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  answer = [...new Set(answer)].sort((a, b) => a - b);

  return answer;
};

console.log(solution([2, 1, 3, 4, 1])); // [2, 3, 4, 5, 6, 7]
console.log(solution([5, 0, 2, 7])); // [2, 5, 7, 9, 12]
