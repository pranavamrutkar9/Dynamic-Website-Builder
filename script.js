const template = document.querySelector(".container")
template.style.display="none"

function createCard(title, views, age, duration, chName, thumbnail){
    
    const clone = template.cloneNode(true)
    clone.style.display="flex"
    // title
    clone.querySelector(".title").innerHTML=title;

    // channel name
    clone.querySelector(".channel-name").innerHTML=chName;

    //views
    if (views>=1000) {
        if (views>=1000000) {
            if (views>=1000000000) {
                views = (views/1000000000).toFixed(1) + 'B'
            }
            else{
                views = (views/1000000).toFixed(1) + 'M'
            }
        }
        else{
            views = (views/1000).toFixed(1) + 'K'
        }
    }
    clone.querySelector(".views").innerHTML=views + ' views';

    // video age
    if(age >= 12){
        age = Math.floor(age/12) + ' years ago'
    }
    else{
        age = age + ' months ago'
    }
    clone.querySelector(".age").innerHTML=age;

    // duration
    clone.querySelector(".duration").innerHTML=duration;

    // thumbnail
    clone.querySelector(".thumbnail").style.backgroundImage = `url(${thumbnail})`;
    clone.querySelector(".thumbnail").style.backgroundPosition = "center";
    clone.querySelector(".thumbnail").style.backgroundSize = "cover";

    document.body.append(clone);
}
createCard("Award Winning Animated Short Film | Koji", 953000, 6, "4:51", "Zean", "./hq720.avif");
createCard("Award Winning Animated Short Film | Koji", 953000, 6, "4:51", "Zean", "./hq720.avif");
createCard("Award Winning Animated Short Film | Koji", 953000, 6, "4:51", "Zean", "./hq720.avif");


