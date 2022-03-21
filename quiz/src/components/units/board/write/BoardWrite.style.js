import styled from '@emotion/styled'

export default styled.button`
    background-color: ${(props) => props.isActive ? "skyblue" : "none"};
    width: 200px;
    height: 50px;
    font-size: 20px;
    font-weight: 700;
`

export const WriterInput = styled.input`
    width: 200px;
    height: 30px;
    margin: 5px auto;

`
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 200px;
    font-size: 20px;
    font-weight: 700;

`