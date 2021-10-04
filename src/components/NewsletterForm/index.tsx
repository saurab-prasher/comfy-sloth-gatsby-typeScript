import React from "react"
import {
  NewsLetterForm,
  FormBtn,
  NewsLetterH2,
  Input,
  NewsLetterText,
  NewsLetterSection,
} from "./NewsLetterElements"

const NewsLetter = () => {
  return (
    <NewsLetterSection>
      <div className="wrapper">

      
      <NewsLetterText>
        <NewsLetterH2>Receive our news and promotions</NewsLetterH2>
      </NewsLetterText>

      <NewsLetterForm>
        <Input type="email" placeholder="Your email" />
        <Input type="text" placeholder="Your first name" />
        <Input type="text" placeholder="Your last name" />
        <FormBtn className="btn btn--primary">Subscribe</FormBtn>
      </NewsLetterForm>
      </div>
    </NewsLetterSection>
  )
}

export default NewsLetter
