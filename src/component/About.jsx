import React, {useState, useEffect } from "react";
import { Typography, Stack, Grid, Button } from "@mui/material";
import "../Css/About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: "1000", delay: "100" });
    return () => {
      AOS.refresh(); // Refresh AOS on component unmount
    };
  }, []);

  const [showContent, setShowContent] = useState(false)
  return (
    <Stack className="About">
      <Grid container>
        <Grid lg={1} sm={0} xs={0}></Grid>
        <Grid lg={5.5} sm={12} xs={12} className="Text" data-aos="zoom-in">
          <Typography variant="h2">قصة كفاح</Typography>

          <Typography variant="subtitle1">
            بسم الله نبدا تعالوا لما اخدكم معايا ف رحلتي المتواضعة ... يلا بينا
            ...بدايتي كاي واحد فينا كان رفيع جدا وكانت الهدوم مبتليقش عليه
            والمظهر مش حلو خالص خصوصا لو كنت طويل بالذات فأنت هتبان رفيع جامد
            وهنا جالي قرار أن لازم اشترك في جيم واغير من نفسي كان قرار صعب لكن
            انتا ممكن تشوفه سهل عادي لكن تعالي اقولك ايه اللي انا واجهته .بص
            يبطل وأنتا ف ماشي ف طريقك او اي قرار عمتا خدته اعرف انك هتواجهه
            عقبات كتيره ..المشاكل اللي واجهتني لما قررت ادخل الجيم طبعا اول حاجه
            هي تريقه الناس عليه وديه لوحدها تقعدك ف البيت
          </Typography>
          <Typography variant="subtitle1">
            طول عمرك بس العكس انا خدتها اكبر حافز ليا ودائما هقولك خلي الحافز
            بتاعك دائما سلبي واهتم اكتر من الحافز الإيجابي عشان مهما كان الحافز
            السلبي بيضايق مياثرش عليك وأنتا ماشي ف طريقك ..أومن دائما
            بمقوله...غياب الدعم لازم يكون هو اكبر حافز ليك ... يوم وري يوم شهر
            وري شهر والدنيا بدأت تتغير معايا وجسمي بدأ يتطور الحمد لله وبفضل
            ربنا عليه بدأت أفكاري واهدافي تتطور وبدل مانا كنت داخل عشان ازود
            وزني الموضوع زاد معايا وقررت ادخل<Button style={{color:'#3786da', display:showContent&&'none'}} onClick={()=>setShowContent(true)}>... قراءة المزيد</Button> 
          </Typography>
          <Typography variant="subtitle1" style={{display:!showContent&&'none'}}>
            واشارك ف بطولات والحمد لله شاركت ف اول بطوله بحيره وحصلت علي مركز
            تالت وسط اكتر من 17لاعب كانت أهم بطوله ف حياتي كانت اول خطوه ليا ف
            عالم البطولات وبعد كده بطوله وري بطوله والحمد شاركت ف اسكندريه 13مره
            من ضمنهم 9مراكز اول بفضل الله وبعد كده حصلت علي 6بطولات جمهوريه
            ودخلت تجارب ابطال عالم وطبعا ده غير البطولات الخاصه اللي حصلت فيها
            علي مراكز متقدمه واخر بطوله احمد علي الدوليه ومنها بطوله ايرون مان
            وبطوله حورس الدوليه وهكذا لغايه موصلوا ل56بطوله علي مدار 9سنيين
          </Typography>
          <Typography variant="subtitle1" style={{display:!showContent&&'none'}}>
            ونص بدأتها من تحت خالص ومكمل باذن الله لغايه ماحقق حلمي وطبعا اشتغلت
            ف مجال التدريب بقالي اكتر من 5سنيين خبره ف المجال ودراسه مكثفه عن كل
            مايخص اللعبه سواء تغذيه تدريب والحمد لله عملت تحولات كتير من تحت
            ايدي بفضل ربنا وبإذن الله مكملين نصيحتي ليك الطريق مش سهل .اوعي تقف
            .اوعي تستلم .اوعي تيأس لمجرد أن ف حاجه جات وعطلتك عن تحقيق هدفك
            الحياه مش عادله وعمرها مهتكون عادله لأنها دنيا ف الاول والاخير لازم
            تسعي لازم تتحرك من مكانك مفيش حاجه بالساهل انتا تقدر...انتا بطل<Button style={{color:'#3786da',}} onClick={()=>setShowContent(false)}>... قراءة محتوى أقل</Button> 
          </Typography>
          <Button style={{ color: "#d48b50" }} variant="text">
            أعرف تفاصيل أكثر
          </Button>
        </Grid>
        <Grid lg={0.5} sm={0} xs={0}></Grid>
        <Grid lg={5} sm={12}>
          <Typography variant="div" className="Img" data-aos="zoom-in">
            <img src="images\Al3rapyImages\Al3rapy7.jpg" alt="" />
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default About;
