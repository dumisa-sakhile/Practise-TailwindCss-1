
const home = (req,res)=>{
    data = {
        title: "Home Page",
    }
    res.status(200).render("home",data);
}

const about =  (req, res) => {
  data = {
    title: "About Page",
  };
  res.status(200).render("about", data);
}

const skills = (req, res) => {
  data = {
    title: "Skills Page",
  };
  res.status(200).render("skills", data);
};

const contact =  (req, res) => {
  data = {
    title: "Contact Page",
  };
  res.status(200).render("contact", data);
}

module.exports = {
    home,
    about,
    skills,
    contact,
}