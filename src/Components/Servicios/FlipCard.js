import { useState } from "react";
import cn from "classnames";

function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    if (card.variant === "click") {
      setShowBack(!showBack);
    }
  }

  function handleFocus() { 
    if (card.variant === "focus") { 
      setShowBack(true); 
    } 
  } 

  function handleBlur() { 
    if (card.variant === "focus") { 
      setShowBack(false); 
    } 
  } 

  return (
    <div
      tabIndex={card.id} 
      className={cn("flip-card-outer", { 
        "focus-trigger": card.variant === "focus" 
      })} 
      onClick={handleClick}
      
    >
      <div
        className={cn("flip-card-inner", {
          showBack,
          "hover-trigger": card.variant === "hover"
        })}
      >
        <div className="card front">

          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <div className="img-container" >
              <img src={card.image} />
            </div>
            <div className="card-body">
                <h4>{card.front}</h4>
            </div>  
          </div>

        </div>
        
        <div className="card back">
            <p className="">{card.back}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
