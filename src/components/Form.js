import React from 'react';
import {Checkbox, FlatButton, Paper, RadioButton, RadioButtonGroup, TextField} from "material-ui";
import Entity from "./Entity";


const Form = () => (
    <Paper zDepth={2}>
        <h1>5월 소물, 도서관 참여신청서</h1>
        <p>
            지금 작성하실 문서는  2018년 5월 26일 (토요일) 오후, "5월, 소프트웨어에 물들다"  행사에 참여를 신청하는 도서관이 작성하는 입력 양식입니다. 양식을 작성하시고 맨 아래 [제출] 버튼을 누르시면  "5월, 소프트웨어에 물들다"  행사에 이 도서관이 강연장을 무상으로 제공하는 조건으로 참여하심을 의미합니다. 도서관의 신청에도 불구하고, 해당 도서관에서 강연을 자원하는 강연자/진행자가 없을 경우에는 그 도서관에서의 행사가 진행되지 못할 수도 있습니다. 이 경우 행사 10일전까지는 주최 측에서 통보해드립니다.
            행사 안내는 http://SoMul.kr  에서 보실 수 있으며, 도서관 및 강연 수강자, , 강연 및 진행 봉사자들을 위한 FAQ는 http://SoMul.kr/faq.html 에서 보실 수 있습니다.
            참여 신청을 원하시면 다음 항목들에 답을 하시고 제출하시면 접수되어, 그 도서관에서 강연, 진행을 하실 자원봉사자를 매칭하는 과정을 거쳐 강연이 확정됩니다. 그 상황은 홈페이지에 실시간으로 공개될 예정이며, 매칭이 완료되면 도서관 담당자에게 그 결과도 통보해드릴 예정입니다. 또 이 행사의 모든 내용은 페이스북 그룹 https://www.facebook.com/groups/may.somul/ 에 공개됩니다. 이 그룹에 가입을 하시면 행사를 주관하는 자원봉사자, 강연자, 진행자, 그리고 다른 도서관들과도 소통하실 수 있습니다.
            신청을 위해서는 다음 질문에 모두 답을 해주시면 됩니다. 응답에 걸리는 시간은 10분 이내 입니다.
        </p>

        <p>* 필수항목</p>

        <Entity
            label={"도서관 이름"}
            required={true}>
            <TextField hintText="내 답변"/>
        </Entity>

        <Entity
            label={"도서관 소재지 (지도 표시, 물품 배송을 위해 우편번호를 포함한 세부주소)"}
            required={true}>
            <TextField hintText="내 답변"/>
        </Entity>

        <Entity
            label={"담당자 이름 (반드시 도서관 관계자만 신청 가능합니다.)"}
            required={true}>
            <TextField hintText="내 답변"/>
        </Entity>

        <Entity
            label={"담당자 Email (주요 공지는 이메일로 전달됩니다)"}
            required={true}>
            <TextField hintText="내 답변"/>
        </Entity>

        <Entity
            label={"담당자 전화번호 (당일 연락을 위해 휴대폰 번호 권장)"}
            required={true}>
            <TextField hintText="내 답변"/>
        </Entity>

        <Entity
            label={"강의실 수용 인원 (예상 청중 규모)"}
            required={true}>
            <TextField hintText="내 답변"/>
        </Entity>

        <Entity
            label={"강의 관련 시설 등 (가능한것 모두 체크)"}
            required={true}>
            <Checkbox label="빔프로젝터 / 스크린"/>
            <Checkbox label="음향 시설"/>
            <Checkbox label="동영상 녹화 시설"/>
            <Checkbox label="행사안내 플랜카드"/>
            <Checkbox label="자체 홍보"/>
            <Checkbox label="기타:"/><TextField />
        </Entity>

        <Entity
            label={"기타 강연자/진행자가 준비해야 할 특별한 요구 사항이 있으시면 여기 적어주세요."}
            required={false}>
            <TextField hintText="내 답변"/>
        </Entity>

        <Entity
            label={"위에 입력하신 담당자 개인 정보는 이 행사 기간동안 연락을 위해 사용되고 폐기될 예정입니다. 이 행사를 위해 위 개인 정보를 행사 주최측이 이용하는 것이 동의하십니까? (필수 동의)"}
            required={true}>
            <RadioButtonGroup name="agreeGroup">
                <RadioButton
                    value="agree"
                    label="예"
                />
            </RadioButtonGroup>
        </Entity>

        <Entity
            label={"도서관의 신청과 행사 주최측의 노력에도 불구하고, 해당 도서관에서 강연을 자원하는 강연자/진행자가 없을 경우에는 그 도서관에서의 행사가 진행되지 못할 수도 있다는 것에 동의하십니까? (필수 동의)"}
            required={false}>
            <RadioButtonGroup name="agreeGroup">
                <RadioButton
                    value="agree"
                    label="예"
                />
            </RadioButtonGroup>
        </Entity>

        <Entity
            label={"기타 강연자/진행자가 준비해야 할 특별한 요구 사항이 있으시면 여기 적어주세요."}
            required={false}>
            <TextField hintText="내 답변"/>
        </Entity>

        <p>
            수고하셨습니다.
        </p>

        <p>
            이 신청이 접수되면 강연 봉사자, 진행 봉사자들이 자신이 가고 싶은 도서관을 선정하게 되며, 주최 측에서도 모든 도서관에서 강연이 성공적으로 이루어질 수 있도록 최선의 노력을 다할 예정입니다. 그 결과는  "5월, 소프트웨어에 물들다" 홈페이지  http://SoMul.kr 를 통해 알 수 있으며, 강연이 확정되면, 또는 강연이 최종적으로 진행되지 못하게 되면 위 담당자에게 별도로 연락을 드릴 예정입니다.
        </p>

        <FlatButton label="제출" />
        <p>
            이 설문지를 통해 비밀번호를 제출하지 마세요.
        </p>

    </Paper>
);

export default Form;