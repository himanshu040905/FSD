const parent=document.getElementById('parent');
//console.log(parent);
const root=ReactDOM.createRoot(parent);
const h2=React.createElement("h2",{style:{backgroundColor:'yellow'}},"Welcome to React DOM");
const li1=React.createElement('li',{},"Himanshu Chauhan");
const li2=React.createElement('li',{},"2023b1531074");
const li3=React.createElement('li',{},"ABES Engineering College, Ghaziabad");
const pic = React.createElement('img',{src:'https://media.istockphoto.com/id/1425793602/photo/concept-of-modern-digital-city-and-innovation-in-night.jpg?s=1024x1024&w=is&k=20&c=SKALYIIbpz24bZ7rdRQCpa8RFCYsEMuDPM44P0WwbgE=',style: { height:'200px', width:'300px' , borderRadius: '50%'}});
const ul=React.createElement('ul',{style:{backgroundColor:'cyan'}},li1,li2,li2);
const h3=React.createElement("h3",{},"Himanshu Chauhan");
const wrap = React.createElement('div',{style:{display: 'flex'}}, pic, h3);
const wrapper = React.createElement('div',{},h2,wrap,ul);

//JSX
const h21=<h2>Hi, I am using JSX</h2>;
const li11=<li>React</li>;
const li12=<li>Java Programming</li>;
const ul1=<ul>{li11}{li12}</ul>;
const wrapper1=(
    <>
    {h21}
    {ul1}
    </>
)
root.render(wrapper1);