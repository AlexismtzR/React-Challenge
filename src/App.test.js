import Post from "./components/Post"
import Social from "./components/Social"
import { Provider } from 'react-redux'
import {store} from "./redux/store"
import React from 'react';
import { shallow, mount } from 'enzyme';
import Comment from './components/Comment'
import toJson from "enzyme-to-json";

const comments = [
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    "postId": 1,
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  },
  {
    "postId": 1,
    "id": 4,
    "name": "alias odio sit",
    "email": "Lew@alysha.tv",
    "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
  }
]

  

describe("rendering components", () => {
  it("renders Social component without crashing", () => {
    shallow(<Provider store={store}><Social/></Provider>);
  });
  it("renders Post component without crashing", () => {
    shallow(<Provider store={store}><Post/></Provider>)
  });
  it("renders Comment component without crashing", () => {
    shallow(<Provider store={store}><Comment/></Provider>);
  });
});

describe("Comments Props", () => {
  it("Check comments props", ()=> {
    const wrapper = shallow(<Provider store={store}><Comment body={"Hello from body"} name={"Carlos"} email={"Test@test.com"}/></Provider>);
    const prop = wrapper.props().children.props.body
    const prop2 = wrapper.props().children.props.name
    const prop3 = wrapper.props().children.props.email
    expect(prop).toEqual('Hello from body');
    expect(prop2).toEqual('Carlos');
    expect(prop3).toEqual('Test@test.com');
  })
})

describe("Post Props", () => {
  it("Check Post props", ()=> {
    const wrapper = shallow(<Provider store={store}><Post title={"test title"} body={"Lorem ipsum dolor sit amet."} comment={comments} postId={1}/></Provider>);
    const prop = wrapper.props().children.props.title
    const prop2 = wrapper.props().children.props.body
    const prop3 = wrapper.props().children.props.comment
    const prop4 = wrapper.props().children.props.postId
    expect(prop).toEqual('test title');
    expect(prop2).toEqual('Lorem ipsum dolor sit amet.');
    expect(prop3).toEqual(comments);
    expect(prop4).toEqual(1);
  })
})

