import styled from '@emotion/styled'

export const Wrapper = styled.div`
display: block;
margin:0;
width: 1200px;
padding: 60px 100px 100px 100px;
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Title = styled.div`
width: 100%;
padding-bottom: 80px;
text-align: center;
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 700;
font-size: 36px;
`
export const Input = styled.div`
width: 100%;
display: flex;
flex-direction: row;
`
export const Input__Short = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
`
export const Input__Short__Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 486px;
`
export const Input__Label = styled.div`
font-size: 16px;
line-height: 24px;
padding-bottom: 16px;
display: flex;
justify-content: row;
`
export const Star = styled.div`
color: #FFD600;
padding-left: 5px;
`
export const Input__Input = styled.input`
width: 100%;
height: 52px;
margin-bottom: 40px;
padding: 14px 14px;
border: 1px solid #BDBDBD;
`
export const Input__Long = styled.div`
display: flex;
flex-direction: column;
width: 996px;
`
export const Input__Address = styled.div`
display: flex;
flex-direction: row;
width: 217px;
justify-content: space-between;
`
export const Input__Input__Content = styled.textarea`
width: 996px;
height: 480px;
padding: 14px 14px;
margin-bottom: 40px;
border: 1px solid #BDBDBD;
`
export const Input__Input__Address = styled.input`
width: 77px;
height: 52px;
margin-bottom: 16px;
padding: 14px 14px;
border: 1px solid #BDBDBD;
`
export const Search = styled.button`
width: 124px;
height: 52px;
background: #000000;
color: white;
`
export const Address__Detail = styled.input`
margin-bottom: 30px;
height: 52px;
border: 1px solid #BDBDBD;
`
export const Picture__Wrapper = styled.div`
width: 282px;
display: flex;
justify-content: space-between;
padding-bottom: 40px;
`
export const Picture = styled.button`
width: 78px;
height: 78px;
background: #BDBDBD;
border: none;
`
export const Picture__Icon = styled.div`
font-size: 28px;
padding-bottom: 5px;
`
export const Picture__Label = styled.div`
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
`
export const Radio__Wrapper = styled.div`
display: flex;
justify-content: row;
padding-bottom: 80px;
`
export const Radio = styled.input`
&:checked {
    /* display: inline-block; */
    appearance: none;
    background: #FFD600;
    width: 12.5px;
    height: 12.5px;
    border-radius: 100%;
    border: 2px solid #FFD600;
  }
`
export const Radio__Label = styled.label`
padding-right: 22px;
`
export const Create = styled.button`
width: 179px;
height: 52px;
background: #FFD600;
border: none;
`