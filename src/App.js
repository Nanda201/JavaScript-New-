import './App.css';
// import ChildCom from './Components/ChildCom';
import ClassClick from './Components/ClassClick';
import Counter from './Components/Counter';
import Covid from './Components/Covid';
import Evenbind from './Components/Evenbind';
import FunClick from './Components/FunClick';
import Memo from './Components/FunctionComponent/Memo';
import Usestate from './Components/FunctionComponent/Usestate';
import Greet from './Components/Greet';
import Handlesubmit from './Components/Handlesubmit';
import Hello from './Components/Hello';
import Message from './Components/Message';
import NameList from './Components/NameList';
import ParentCom from './Components/ParentCom';
import PureComponents from './Components/PureComponents';
import UserGreet from './Components/UserGreet';
import Welcome from './Components/Welcome';
import Mounting from './EventLifeCycleMethods/Mounting';
import Update from './EventLifeCycleMethods/Update';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Apinsert from './Components/Apinsert';
import Button from './Components/Button';
import Basic from './Components/Basic';
import Func1 from './Components/FunctionComponent/Func1';
import Rev from './Components/Rev';
import Parent from './Components/Parent';
import Form from './Components/Form';
import Task1 from './Components/FunctionComponent/Task1';
import Table1 from './Components/Table1';
import FormTask from './Components/FormTask';
import ChildTable from './Components/ParentTable';
import ParentTable from './Components/ParentTable';
import Count from './Hooks/Count';
import CalForm from './Components/CalForm';

function App() {
  return (
    <div className='App'>
      {/* <Memo name="abhisha"/> */}
      {/* <PureComponents name="abh"/> */}
      {/* <Usestate /> */}
      {/* <Handlesubmit /> */}
      {/* <Update /> */}
      {/* <Mounting name='pinnapuralla' /> */}

      {/* <NameList /> */}
      {/* <UserGreet /> */}
      {/* <Greet name="nanda" names="abhi" /> */}
      {/* <p>This is sub div</p> </Greet>
      <button> Click me</button> */}

      {/* <Welcome  name="kishore" />  */}
      {/* <Message /> */}
      {/* <Hello /> */}
      {/* <Counter /> */}
      {/* <FunClick /> */}
      {/* <ClassClick /> */}
      {/* <Evenbind /> */}
       {/* < Covid /> */}
       {/* <ParentCom /> */}
       {/* <Apinsert /> */}
       {/* <Basic  name="nanda"/> */}

       {/* <BrowserRouter>
       <Routes> */}
        {/* <Route path='/' element={<Memo name="nandu"/>}/> */}
        {/* <Route path='/' element={<Hello />}/> */}
        {/* <Route path='/pure' element={<PureComponents name="ayu"/>}/> */}
        {/* <Route path='/' element={<Apinsert/>}/> */}
        {/* <Route path='/' element={<Button />}/>
       </Routes>
       </BrowserRouter> */}
       {/* <Func1 name="pinnapuralla nanda " /> */}
       {/* <Rev name="abhisha"/> */}
       {/* <Parent/> */}
       {/* <Form /> */}
       {/* <Task1/> */}
       {/* <Table1 /> */}
       {/* <FormTask /> */}
       {/* <ParentTable /> */}
       {/* <Count /> */}
       <CalForm />
      
    </div>
  );
}

export default App;
