
import  React  from 'react';
import  faker  from 'faker';

const CommentDetail=(props)=>{
  return(
      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="avatar"/>
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">{props.created_at}</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
  )
}

//これが外部へexportさせて利用を可能にしてくれる。。
export default CommentDetail