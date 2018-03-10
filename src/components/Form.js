import React, { Component } from 'react';
import request from 'request';
import {Checkbox, Paper, RadioButton, RadioButtonGroup, RaisedButton, TextField} from "material-ui";
import Entity from "./Entity";
import LinkedText from "./LinkedText";
import "./Form.css";
import { RESTAPI_HOST } from "../consts/config";
import {isValid, notEmptyString} from "../utils/ValidationUtils";
import {EntityForm, TYPE_BOOLEAN, TYPE_ONELINETEXT} from "../data/EntityForm";


const libraryName = "libraryName";
const libraryLocation = "libraryLocation";
const managerName = "managerName";
const managerEmail = "managerEmail";
const managerPhonenumber = "managerPhonenumber";
const capacityOfAudiences = "capacityOfAudiences";
const facilities = "facilities";
const facilitiesBeamOrScreen = "facilitiesBeamOrScreen";
const facilitiesSound = "facilitiesSound";
const facilitiesRecord = "facilitiesRecord";
const facilitiesPlacard = "facilitiesPlacard";
const facilitiesSelfPromotion = "facilitiesSelfPromotion";

const requirementsForSpeaker = "requirementsForSpeaker";
const personalInfoAgreement = "personalInfoAgreement";
const noVolunteerAgreement = "noVolunteerAgreement";
const otherFacilities = "otherFacilities";


class Form extends Component {
    state = {
        [libraryName]: new EntityForm("", TYPE_ONELINETEXT, true, [notEmptyString]),
        [libraryLocation]: new EntityForm("", TYPE_ONELINETEXT, true, [notEmptyString]),
        [managerName]: new EntityForm("", TYPE_ONELINETEXT, true, [notEmptyString]),
        [managerEmail]: new EntityForm("", TYPE_ONELINETEXT, true, [notEmptyString]),
        [managerPhonenumber]: new EntityForm("", TYPE_ONELINETEXT, true, [notEmptyString]),
        [capacityOfAudiences]: new EntityForm("", TYPE_ONELINETEXT, true, [notEmptyString]),
        [facilities]: new EntityForm({
            [facilitiesBeamOrScreen]: false,
            [facilitiesSound]: false,
            [facilitiesRecord]: false,
            [facilitiesPlacard]: false,
            [facilitiesSelfPromotion]: false,
        }, TYPE_ONELINETEXT, true, []),
        [requirementsForSpeaker]: new EntityForm("", TYPE_ONELINETEXT, false),
        [otherFacilities]: new EntityForm("", TYPE_ONELINETEXT, false),
        [personalInfoAgreement]: new EntityForm("", TYPE_BOOLEAN, true, [notEmptyString]),
        [noVolunteerAgreement]: new EntityForm("", TYPE_BOOLEAN, true, [notEmptyString]),
    };

    componentWillMount() {
        // this.syncFormsToState();
    }

    // syncFormsToState() {
    //     let stateBuffer = {};
    //     for (let key in this.forms) {
    //         stateBuffer[key] = this.forms[key].value;
    //         // console.log(`stateBuffer[${key}]=`, this.state[key]);
    //     }
    //
    //     this.setState(stateBuffer);
    // }

    everyFormsAreValid() {
        for (let key in this.forms) {
            let eachForm = this.forms[key];
            if (!isValid(eachForm.value, eachForm.validators)) {
                return false;
            }
        }

        return true;
    }

    onSubmit = (event) => {
        if (this.everyFormsAreValid()) {

        }
        request
            .post({
                url: RESTAPI_HOST + 'api/v1/forms',
                json: true,
                body: this.state,
            })
            .on('error', (err) => {
                console.log("err=", err);
            })
            .on('response', (response) => {
                console.log("statusCode=", response.statusCode);
                console.log("content-type=", response.headers['content-type']);
                response.on('data', (data) => {
                    console.log('received data=', data)
                })
            });
    };

    handleChangeWithName = (propertyName) => {
        return (event) => {
            this.setValue(propertyName, event.target.value);
            console.log("propertyName=", propertyName, "this.state[propertyName].value=", this.state[propertyName].value);
        };
    };

    setValue = (propertyName, value) => {
        this.setState({
            ...this.state,
            [propertyName]: {
                ...this.state[propertyName],
                value: value,
            }
        });
    };

    handleRadioChangeWithName = (propertyName) => {
        return (unused_event, unused_value) => {
            this.setValue(propertyName, true);
            console.log("propertyName=", propertyName, "this.state[propertyName].value=", this.state[propertyName].value);
        };
    };

    handleCheckedChangeWithName(propertyName, checkedPropertyName) {
        return (event, isInputChecked) => {
            this.setValue(propertyName, {
                [propertyName]: {
                    ...this.state[propertyName].value,
                    [checkedPropertyName]: isInputChecked
                }
            });
            console.log("propertyName=", propertyName, "this.state[propertyName].value=", this.state[propertyName].value);
        };
    }

    render() {
        console.log("state=", this.state);
        return (
            <Paper className="paper" zDepth={2}>
                <h1>5월 소물, 도서관 참여신청서</h1>
                <hr/>
                <LinkedText>
                    지금 작성하실 문서는 2018년 5월 26일 (토요일) 오후, "5월, 소프트웨어에 물들다" 행사에 참여를 신청하는 도서관이 작성하는 입력 양식입니다. 양식을 작성하시고 맨 아래
                    [제출] 버튼을 누르시면 "5월, 소프트웨어에 물들다" 행사에 이 도서관이 강연장을 무상으로 제공하는 조건으로 참여하심을 의미합니다. 도서관의 신청에도 불구하고, 해당 도서관에서
                    강연을 자원하는 강연자/진행자가 없을 경우에는 그 도서관에서의 행사가 진행되지 못할 수도 있습니다. 이 경우 행사 10일전까지는 주최 측에서 통보해드립니다.
                    행사 안내는 http://SoMul.kr 에서 보실 수 있으며, 도서관 및 강연 수강자, , 강연 및 진행 봉사자들을 위한 FAQ는 http://SoMul.kr/faq.html
                    에서 보실 수 있습니다.
                    참여 신청을 원하시면 다음 항목들에 답을 하시고 제출하시면 접수되어, 그 도서관에서 강연, 진행을 하실 자원봉사자를 매칭하는 과정을 거쳐 강연이 확정됩니다. 그 상황은 홈페이지에
                    실시간으로 공개될 예정이며, 매칭이 완료되면 도서관 담당자에게 그 결과도 통보해드릴 예정입니다. 또 이 행사의 모든 내용은 페이스북 그룹
                    https://www.facebook.com/groups/may.somul/ 에 공개됩니다. 이 그룹에 가입을 하시면 행사를 주관하는 자원봉사자, 강연자, 진행자, 그리고 다른
                    도서관들과도 소통하실 수 있습니다.
                    신청을 위해서는 다음 질문에 모두 답을 해주시면 됩니다. 응답에 걸리는 시간은 10분 이내 입니다.
                </LinkedText>
                <hr/>
                <p className="required">* 필수항목</p>

                <Entity
                    label={"도서관 이름"}
                    validated={isValid(this.state[libraryName].value, this.state[libraryName].validators)}
                    required={true}>
                    <TextField
                        hintText="내 답변"
                        value={this.state[libraryName].value}
                        onChange={this.handleChangeWithName(libraryName)}
                    />
                </Entity>

                <Entity
                    label={"도서관 소재지 (지도 표시, 물품 배송을 위해 우편번호를 포함한 세부주소)"}
                    validated={isValid(this.state[libraryLocation].value, this.state[libraryLocation].validators)}
                    required={true}>
                    <TextField
                        hintText="내 답변"
                        value={this.state[libraryLocation].value}
                        onChange={this.handleChangeWithName(libraryLocation)}
                    />
                </Entity>

                <Entity
                    label={"담당자 이름 (반드시 도서관 관계자만 신청 가능합니다.)"}
                    validated={isValid(this.state[managerName].value, this.state[managerName].validators)}
                    required={true}>
                    <TextField
                        hintText="내 답변"
                        value={this.state[managerName].value}
                        onChange={this.handleChangeWithName(managerName)}
                    />
                </Entity>

                <Entity
                    label={"담당자 Email (주요 공지는 이메일로 전달됩니다)"}
                    validated={isValid(this.state[managerEmail].value, this.state[managerEmail].validators)}
                    required={true}>
                    <TextField
                        hintText="내 답변"
                        value={this.state[managerEmail].value}
                        onChange={this.handleChangeWithName(managerEmail)}
                    />
                </Entity>

                <Entity
                    label={"담당자 전화번호 (당일 연락을 위해 휴대폰 번호 권장)"}
                    validated={isValid(this.state[managerPhonenumber].value, this.state[managerPhonenumber].validators)}
                    required={true}>
                    <TextField
                        hintText="내 답변"
                        value={this.state[managerPhonenumber].value}
                        onChange={this.handleChangeWithName(managerPhonenumber)}
                    />
                </Entity>

                <Entity
                    label={"강의실 수용 인원 (예상 청중 규모)"}
                    validated={isValid(this.state[capacityOfAudiences].value, this.state[capacityOfAudiences].validators)}
                    required={true}>
                    <TextField
                        hintText="내 답변"
                        value={this.state[capacityOfAudiences].value}
                        onChange={this.handleChangeWithName(capacityOfAudiences)}
                    />
                </Entity>

                <Entity
                    label={"강의 관련 시설 등 (가능한것 모두 체크)"}
                    validated={true}
                    required={true}>
                    <Checkbox
                        className="checkbox"
                        label="빔프로젝터 / 스크린"
                        checked={this.state[facilities].value[facilitiesBeamOrScreen]}
                        onCheck={this.handleCheckedChangeWithName(facilities, facilitiesBeamOrScreen)}
                    />
                    <Checkbox
                        className="checkbox"
                        label="음향 시설"
                        checked={this.state[facilities].value[facilitiesSound]}
                        onCheck={this.handleCheckedChangeWithName(facilities, facilitiesSound)}
                    />
                    <Checkbox
                        className="checkbox"
                        label="동영상 녹화 시설"
                        checked={this.state[facilities].value[facilitiesRecord]}
                        onCheck={this.handleCheckedChangeWithName(facilities, facilitiesRecord)}
                    />
                    <Checkbox
                        className="checkbox"
                        label="행사안내 플랜카드"
                        checked={this.state[facilities].value[facilitiesPlacard]}
                        onCheck={this.handleCheckedChangeWithName(facilities, facilitiesPlacard)}
                    />
                    <Checkbox
                        className="checkbox"
                        label="자체 홍보"
                        checked={this.state[facilities].value[facilitiesSelfPromotion]}
                        onCheck={this.handleCheckedChangeWithName(facilities, facilitiesSelfPromotion)}
                    />
                </Entity>

                <Entity
                    label={"기타 준비할 수 있으신 강의 관련 시설이 있으시면 여기 적어주세요."}
                    required={false}>
                    <TextField
                        hintText="내 답변"
                        value={this.state[otherFacilities].value}
                        onChange={this.handleChangeWithName(otherFacilities)}
                    />
                </Entity>

                <Entity
                    label={"기타 강연자/진행자가 준비해야 할 특별한 요구 사항이 있으시면 여기 적어주세요."}
                    required={false}>
                    <TextField
                        hintText="내 답변"
                        value={this.state[requirementsForSpeaker].value}
                        onChange={this.handleChangeWithName(requirementsForSpeaker)}
                    />
                </Entity>

                <Entity
                    label={"위에 입력하신 담당자 개인 정보는 이 행사 기간동안 연락을 위해 사용되고 폐기될 예정입니다. 이 행사를 위해 위 개인 정보를 행사 주최측이 이용하는 것이 동의하십니까? (필수 동의)"}
                    validated={isValid(this.state[personalInfoAgreement].value, this.state[personalInfoAgreement].validators)}
                    required={true}>
                    <RadioButtonGroup
                        name="agreeGroup"
                        onChange={this.handleRadioChangeWithName(personalInfoAgreement)}
                    >
                        <RadioButton
                            value="agree"
                            label="예"
                        />
                    </RadioButtonGroup>
                </Entity>

                <Entity
                    label={"도서관의 신청과 행사 주최측의 노력에도 불구하고, 해당 도서관에서 강연을 자원하는 강연자/진행자가 없을 경우에는 그 도서관에서의 행사가 진행되지 못할 수도 있다는 것에 동의하십니까? (필수 동의)"}
                    validated={isValid(this.state[noVolunteerAgreement].value, this.state[noVolunteerAgreement].validators)}
                    required={true}>
                    <RadioButtonGroup
                        name="agreeGroup"
                        onChange={this.handleRadioChangeWithName(noVolunteerAgreement)}
                    >
                        <RadioButton
                            value="agree"
                            label="예"
                        />
                    </RadioButtonGroup>
                </Entity>

                <hr/>

                <p>
                    수고하셨습니다.
                </p>

                <LinkedText>
                    이 신청이 접수되면 강연 봉사자, 진행 봉사자들이 자신이 가고 싶은 도서관을 선정하게 되며, 주최 측에서도 모든 도서관에서 강연이 성공적으로 이루어질 수 있도록 최선의 노력을 다할
                    예정입니다. 그 결과는 "5월, 소프트웨어에 물들다" 홈페이지 http://SoMul.kr 를 통해 알 수 있으며, 강연이 확정되면, 또는 강연이 최종적으로 진행되지 못하게 되면
                    위 담당자에게 별도로 연락을 드릴 예정입니다.
                </LinkedText>
                <br/>

                <RaisedButton
                    primary={true}
                    label="제출"
                    onClick={this.onSubmit}
                />
                <br/>
                <br/>

                <p className="comment">
                    이 설문지를 통해 비밀번호를 제출하지 마세요.
                </p>

            </Paper>);
    }
}

export default Form;