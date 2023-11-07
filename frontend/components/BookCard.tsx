import { useState } from 'react';
import React from 'react'
import { FaPlus, FaArrowRight, FaArrowLeft, FaTrash, FaEdit } from 'react-icons/fa';

interface BookCardProps {
    title: string;
    state: string;
    id: number;
    function1: (id: number, status: string) => void;
    function2: (id: number) => void;
  }
export const BookCard: React.FC<BookCardProps> = ({ title, state, id, function1, function2 })=>{
    return(<div className="book-item bg-gray-100 p-2 m-2 rounded shadow-lg flex items-center">
    <span className="mr-10">{title}</span>
    {state =="in-progress" &&
    <><FaEdit classname="edit-icon ml-auto"/>
    <FaArrowLeft
      className="arrow-icon cursor-pointer ml-auto"
      onClick={() => function1(id, 'to-read')}
    />
    <FaArrowRight
      className="arrow-icon cursor-pointer ml-auto"
      onClick={() => function1(id, 'completed')}
    />
    <FaTrash
      className="delete-icon cursor-pointer ml-auto"
      onClick={() => function2(id)}
    /></>
}
{state =="to-read" &&
    <><FaEdit classname="edit-icon ml-auto"/>
    
    <FaArrowRight
      className="arrow-icon cursor-pointer ml-auto"
      onClick={() => function1(id, 'in-progress')}
    />
    <FaTrash
      className="delete-icon cursor-pointer ml-auto"
      onClick={() => function2(id)}
    /></>
}
{state =="completed" &&
    <><FaEdit classname="edit-icon ml-auto"/>
    <FaArrowLeft
      className="arrow-icon cursor-pointer ml-auto"
      onClick={() => function1(id, 'in-progress')}
    />
    <FaTrash
      className="delete-icon cursor-pointer ml-auto"
      onClick={() => function2(id)}
    /></>
}
  </div>)
}
