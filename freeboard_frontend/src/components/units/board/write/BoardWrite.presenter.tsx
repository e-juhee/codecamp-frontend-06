import { IBoardWriteUIProps } from "./BoardWrite.types"; // 참고: default로 내보낸 경우에는 import 받는 변수에 중괄호가 없어도 된다. 이름을 다르게 써도 받아서 그 다르게 쓴 이름으로 사용할 수 있다. 전체 다 가져오기: * as S
import * as S from "./BoardWrite.style";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import UploadImage from "../../../commons/UploadImage";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      {props.isOpen && ( // false일땐 이부분이 안나오고, isOpen이 true로 바뀌면 리렌더 되면서 생긴다.
        <Modal
          visible={true}
          onOk={props.onToggleModal}
          onCancel={props.onToggleModal} // isOpen이 false가 되고 화면이 리렌더되면서 모달이 뜨지 않는다.
        >
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <S.Wrapper>
        <S.Title>{props.isEdit ? "게시물 수정" : "게시물 등록"}</S.Title>

        <S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>
              작성자<S.Required>*</S.Required>
            </S.Label>
            <S.ShortInput
              id="writer"
              onChange={props.onChangeInputs}
              type="text"
              placeholder="이름을 적어주세요."
              defaultValue={props.data?.fetchBoard?.writer || ""} // 등록하기에서 왔으면 data가 없음
              readOnly={!!props.data?.fetchBoard?.writer} // 클릭 안됨
            />
            <S.Error id="writer">{props.errors.writer}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>
              비밀번호<S.Required>*</S.Required>
            </S.Label>
            <S.ShortInput
              id="password"
              onChange={props.onChangeInputs}
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
            <S.Error id="password">{props.errors.password}</S.Error>
          </S.InputWrapper>
        </S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>
            제목<S.Required>*</S.Required>
          </S.Label>
          <S.Input
            id="title"
            onChange={props.onChangeInputs}
            type="text"
            placeholder="제목을 작성해주세요."
            defaultValue={props.data?.fetchBoard?.title}
          />
          <S.Error id="title">{props.errors.title}</S.Error>
          <S.Label>
            내용<S.Required>*</S.Required>
          </S.Label>
          <S.ContentInput
            id="contents"
            onChange={props.onChangeInputs}
            placeholder="내용을 작성해주세요."
            defaultValue={props.data?.fetchBoard?.contents}
          />
          <S.Error id="contents">{props.errors.contents}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>주소</S.Label>
          <S.ZipCodeWrapper>
            <S.ZipCode
              type="text"
              // defaultValue={props.data?.fetchBoard?.boardAddress?.zipcode}
              readOnly
              value={
                props?.boardAddressInputs?.zipcode ||
                props.data?.fetchBoard?.boardAddress?.zipcode ||
                ""
              }
            />
            <S.ZipCodeButton onClick={props.onToggleModal}>
              우편번호 검색
            </S.ZipCodeButton>
          </S.ZipCodeWrapper>
          <S.Address
            type="text"
            // defaultValue={props.data?.fetchBoard?.boardAddress?.address} // 이렇게 하면 value가 덮어씌워서 값이 나오지 않는다. defaultValue는 값이 없을 때 보여주는 것!
            readOnly
            value={
              props?.boardAddressInputs?.address ||
              props.data?.fetchBoard.boardAddress?.address || // 선택한 게 없으면 보여준다.
              ""
            }
          />
          <S.Address
            id="addressDetail"
            onChange={props.onChangeAddressDetail}
            type="text"
            defaultValue={
              props.data?.fetchBoard?.boardAddress?.addressDetail || ""
            }
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>유튜브</S.Label>
          <S.Input
            id="youtubeUrl"
            onChange={props.onChangeInputs}
            type="text"
            placeholder="링크를 복사해주세요."
            defaultValue={props.data?.fetchBoard?.youtubeUrl || ""}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>사진 첨부</S.Label>
          <S.ImageWrapper>
            <UploadImage
              imageUrl={props.imageUrl}
              setImageUrl={props.setImageUrl}
              fileList={props.fileList}
              setFileList={props.setFileList}
              data={props.data}
            ></UploadImage>
          </S.ImageWrapper>
        </S.InputWrapper>

        <S.SettingWrapper>
          <S.Label>메인 설정</S.Label>
          <S.Radio
            type="radio"
            id="youtube"
            name="radio-button"
            checked
            readOnly
          />
          <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
          <S.Radio type="radio" id="images" name="radio-button" />
          <S.RadioLabel htmlFor="images">사진</S.RadioLabel>
        </S.SettingWrapper>

        <S.SubmitButton
          isActive={props.isActive}
          onClick={props.isEdit ? props.onClickUpdate : props.onClickCreate}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.SubmitButton>
      </S.Wrapper>
    </>
  );
}
