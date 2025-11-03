import Student from './Student.jsx';

function App() {
  const student =[
  {
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPY5O2w3GXTGi6eEJbGGeH6LIwXNiTBa64bQ&s',
    name: 'John Doe',
    age: 21,
    course: 'Computer Science',
    year: '3rd',
    university: 'ABC University'
  },
  {
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPY5O2w3GXTGi6eEJbGGeH6LIwXNiTBa64bQ&s',
    name: 'Amit Kumar',
    age: 21,
    course: 'Computer Science',
    year: '3rd',
    university: 'ABC University'
  },
  {
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPY5O2w3GXTGi6eEJbGGeH6LIwXNiTBa64bQ&s',
    name: 'Vicky Singh',
    age: 21,
    course: 'Computer Science',
    year: '3rd',
    university: 'ABC University'
  }
];



  return (
    <div>
      {student.map((ele, index) => (
        <Student key={index} data={ele} />
      ))}
    </div>
  );
}

export default App;