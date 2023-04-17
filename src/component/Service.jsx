import React from "react";
import Card from "./Card";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">   
                <Card imgsrc="https://media.istockphoto.com/id/496822526/photo/robot-sitting-on-a-bunch-of-books-contains-clipping-path.jpg?s=2048x2048&w=is&k=20&c=WzoDl8HYRKbsibSYb8jsLGz4PvbaRn02W9qt-jFpjKs=" title="Robotic development"/>
                <Card imgsrc="https://media.istockphoto.com/id/1253858063/vector/mobile-app-development-set.jpg?s=2048x2048&w=is&k=20&c=iL1aphouU6SD_D_ix9o6M4KjlDqmFDbkewTL4H5wdwQ=" title="Mobile development"/>
                <Card imgsrc="https://cdn.pixabay.com/photo/2021/03/15/07/03/programmers-6096322_960_720.png" title="Web development"/>
                <Card imgsrc="https://media.istockphoto.com/id/1426836112/photo/ai.jpg?s=2048x2048&w=is&k=20&c=WA35bKUKxgHmgXVzi6PosBHHgXKymqgpKLzMpqnZ1qg=" title="Android development"/>
                <Card imgsrc="https://cdn.pixabay.com/photo/2018/03/22/02/37/email-3249062_960_720.png" title="Email Module"/>
                <Card imgsrc="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_960_720.jpg" title="System Processing"/>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;

