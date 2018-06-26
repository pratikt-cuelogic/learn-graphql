import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import 'react-datepicker/dist/react-datepicker.css';
import NumberFormat from 'react-number-format';
import { taffy } from 'taffydb';
// import MyHoc from '../../MyHoc';
// import MyPdfViewer from './MyPdfViewer';
import cookie from 'react-cookies'

const data = {"data":{"faqs":[{"id":"7","question":"Investor Qualification","faqItems":[{"id":"1530a5f0-67c8-11e8-a3dd-ff8035ed2c2a","question":"Who can invest on NextSeed?","answer":"Anyone over the age of 18 with a U.S. social security number or tax identification number and U.S. residential address can make investments on NextSeed. This is because you’ll need to open an investment account at our partner U.S. bank to make investments and receive any payments from businesses.","__typename":"FaqItem"},{"id":"ed337a00-687b-11e8-a668-35fa2f5e1805","question":"Can I invest if I am under 18 years old?","answer":"Thank you for your interest! It’s great that you’re already thinking about your financial future. Unfortunately, our members must be 18 years or older to be able to invest. Please come back when you’re older!","__typename":"FaqItem"},{"id":"35adb130-6410-11e8-b7e2-f168b533af3e","question":"Do I need to be an “Accredited Investor” to invest on NextSeed?","answer":"No, you don’t. Anyone that is a U.S. resident can invest on NextSeed. Investment opportunities that were only for the wealthy are now available to you!","__typename":"FaqItem"},{"id":"21a68430-6412-11e8-933e-3b2587abb6ab","question":"Can entity investors invest?","answer":"Yes, an entity investor can make an investment on NextSeed, just like individual investors.","__typename":"FaqItem"},{"id":"c14dd5a0-6413-11e8-b7e2-f168b533af3e","question":"Can I invest through an Individual Retirement Account on NextSeed?","answer":"Yes, you can! Investing on NextSeed is available for Individual Retirement Accounts. Please see our for more information.","__typename":"FaqItem"}],"__typename":"FaqItem"},{"id":"8","question":"Investment Guidelines","faqItems":[{"id":"1530a5f0-67c8-11e8-a3dd-ff8035ed2c2b","question":"Am I investing in NextSeed or in the small businesses directly?","answer":"Anyone over the age of 18 with a U.S. social security number or tax identification number and U.S. residential address can make investments on NextSeed. This is because you’ll need to open an investment account at our partner U.S. bank to make investments and receive any payments from businesses.","__typename":"FaqItem"},{"id":"ed337a00-687b-11e8-a668-35fa2f5e18b5","question":"Is there a limit to how much I can invest?","answer":"Yes, Regulation Crowdfunding places limitations on the total amount investors may make Regulation Crowdfunding offerings within a 12-month period, depending on your income and net worth. NextSeed helps you keep track of your maximum limit on your account center. See the SEC's Investor Bulletin for the latest information.","__typename":"FaqItem"},{"id":"68dc4810-6586-11e8-90e2-7fb5cbd9ec45","question":" Where can I find out more about Regulation Crowdfunding investing?","answer":"To find out more about Regulation Crowdfunding, see our welcome kit! Having trouble accessing the link? Please contact info@nextseed.com to request a copy. You can also visit the Financial Industry Regulatory Authority's guide on Crowdfunding and the JOBS Act. The Securities and Exchange Commission also has a guide for investors on Regulation Crowdfunding.","__typename":"FaqItem"},{"id":"35adb130-6410-11e8-b7e2-f168b533gf3e","question":"If I don’t get equity, how is this an investment?","answer":"Contrary to popular belief, equity is only one kind of investment. There are actually three main types of investments - equity, debt and cash equivalents. On NextSeed, you are making debt investments. It's like buying bonds instead of stocks.","__typename":"FaqItem"}],"__typename":"FaqItem"},{"id":"9","question":"NextSeed Account","faqItems":[{"id":"1530a5f0-67c8-11e8-a3dd-ff8045ed2c2a","question":"I’m ready to sign up. How can I sign up?","answer":"That’s great! There are two ways to sign up. First, you can click “Sign Up” at the top right corner of this page and start signing up via Facebook or email. Or, when you are browsing the offerings and you find one you like, clicking “Invest Now” will start the signup process.","__typename":"FaqItem"},{"id":"68dc4810-6586-11e8-90e2-7fb5cbd9ec91","question":"Does the uninvested cash in my NextSeed account earn interest?","answer":"If you want to sign up by creating an IRA or with your investment entity, you can access those options by clicking “Sign Up” and selecting your preferred account type. You can get more information about IRAs here.","__typename":"FaqItem"},{"id":"ed337a00-687b-11e8-a668-35fa2f5e180a","question":"What am I creating when I sign up?","answer":"The interest rate applied to the uninvested cash in a regular NextSeed account is posted here. ","__typename":"FaqItem"}],"__typename":"FaqItem"}]}};

export default class Timeline extends React.Component {
  componentWillMount() {
    // cookie.save('mycustomcookie3', 'faltu', {maxAge: 30}); //86400
  }
  render() {
 //    const faqs = taffy(data.data.faqs);
 //    const keyword = 'investor';
 // const res = faqs([{question: {likenocase: keyword}}, {}]);
 // console.log(res.get());
 const faqs = data.data.faqs;
 const keyword = 'open';
 const result = faqs.filter(f => {
   return f.question.toLowerCase().includes(keyword) ||
   f.faqItems.find(item => item.question.toLowerCase().includes(keyword) ||
   item.answer.toLowerCase().includes(keyword));
 })
 console.log(cookie.load('mycustomcookie3'), 'heeyy');
    return (
      <div prop1="a1" prop2="a2">
        <NumberFormat format="(###)-###-####" mask="_"/>
        <NumberFormat maxLength={10} thousandSeparator={true} mask="_"/>
      </div>      
    )
  }
}