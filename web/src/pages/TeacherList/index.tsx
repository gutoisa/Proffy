import React, { useState, FormEvent } from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/input';
import Select from '../../components/Select';
import api from '../../services/api';



function TeacherList(){

    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
// no caso pode ser usado o async e await ou o .then e .catch
   async function searchTeachers(e: FormEvent){
        e.preventDefault();
      const response = await api.get('classes',{
          params: {
              subject,
              week_day,
              time,
          }
      });

      setTeachers(response.data);

   }
    return(
        <div id="page-teacher-list" className="container">
         <PageHeader title="Estes são os proffys disponiveis">
           <form id="search-teachers" onSubmit={searchTeachers}>
           <Select 
                name="subject" 
                label="Matéria"
                value={subject}
                onChange = {(e) =>{setSubject(e.target.value)}}
                options={[
                    {value: 'Artes', label: 'Artes'},
                    {value: 'Biologia', label: 'Biologia'},
                    {value: 'Ciências', label: 'Ciências'},
                    {value: 'Educação Fisica', label: 'Educação Fisica'},
                    {value: 'Fisica', label: 'Fisica'},
                    {value: 'Geografica', label: 'Geografica'},
                    {value: 'História', label: 'História'},
                    {value: 'Matemática', label: 'Matemática'},
                    {value: 'Português', label: 'Português'},
                    {value: 'Química', label: 'Química'},
                ]}
                />

                    <Select 
                name="week_day" 
                label="Dia da semana"
                value={week_day}
                onChange = {(e) =>{setWeekDay(e.target.value)}}
                options={[
                    {value: '0', label: 'Domingo'},
                    {value: '1', label: 'Segunda-feira'},
                    {value: '2', label: 'Terça-feira'},
                    {value: '3', label: 'Quarta-feira'},
                    {value: '4', label: 'Quinta-feira'},
                    {value: '5', label: 'Sexta-feira'},
                    {value: '6', label: 'Sabado'},
                ]}
                />
               <Input 
               type="time" 
               name="time"  
               label="Horas"
               value={time}
               onChange = {(e) =>{setTime(e.target.value)}}
               />

               <button type='submit'>
                   Buscar
               </button>
            </form>
         </PageHeader> 
        <main>
            {teachers.map((teacher:Teacher) =>{
                return <TeacherItem key={teacher.id} teacher={teacher}/>
            })}
       
        </main>   
        </div>
    )
}

export default TeacherList;