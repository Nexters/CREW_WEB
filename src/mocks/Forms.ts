import { Question, QuestionType, SelectQuestion } from "models/Form";
import { MultilineQuestion } from "../models/Form";
const questions: Question[] = [
  {
    type: QuestionType.MultiLine,
    title: "협업 관련 경험이 있으신가요?",
    placeholder: "",
    isRequired: true,
    value:
      "항상 도전하고 그 상황을 즐겨라”아버지께서 등산을 좋아하셔서 저는 일곱살 때부터 아버지와 함께 등산을 하게 되었는데 힘들고 가슴이 터질 것 같을 때마다 제 자신을 극복하기 위한 방법을 터득하게 되었습니다. 산에 오르는 걸 좋아하다 보니 높은 산 일수록 더 올라가 보고 싶은 도전정신이 생기고 가슴이 뛰고 힘든 그 상황을 즐기게 되었습니다. 그러한 영향 때문인지 학창시절 친구들과 교통요금만 챙긴 무전여행을 종종 갔는데 처음에는 돈이 없어서 힘들었지만 점차 그 상황에 적응해가며 돈이 있을 때보다 더 재미있고 알차게 여행을 보내곤 했습니다. 어렸을 때부터 매사에 도전하는 자세를 기른 것이 오늘 날 바로 LG 디스플레이에 도전할 수 있는 원동력이 된 것 같습니다. “항상 도전하고 그 상황을 즐겨라” 아버지께서 등산을 좋아하셔서 저는 일곱살 때부터 아버지와 함께 등산을 하게 되었는데 힘들고 가슴이 터질 것 같을 때마다 제 자신을 극복하기 위한 방법을 터득하게 되었습니다. 산에 오르는 걸 좋아하다 보니 높은 산 일수록 더 올라가 보고 싶은 도전정신이 생기고 가슴이 뛰고 힘든 그 상황을 즐기게 되었습니다. 그러한 영향 때문인지 학창시절 친구들과 교통요금만 챙긴 무전여행을 종종 갔는"
  } as MultilineQuestion,
  {
    type: QuestionType.Select,
    title: "GUI 제작을 위해 주로 사용하는 프로그램을 선택해주세요.",
    placeholder: "",
    isRequired: true,
    options: [
      {
        key: "sketch",
        value: "Sketch"
      },
      {
        key: "xd",
        value: "XD"
      },
      {
        key: "photoshop",
        value: "Photoshop"
      },
      {
        key: "illustration",
        value: "Illustration"
      }
    ],
    value: 1
  } as SelectQuestion,
  {
    type: QuestionType.MultiLine,
    title: "GUI 제작을 위해 주로 사용하는 프로그램을 선택해주세요.",
    placeholder: "",
    isRequired: true
  }
];
export default questions;
