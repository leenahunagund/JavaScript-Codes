let cartquantity=0;
function updateCartQuantity(n){
    if(n==1){
        if (cartquantity+1>10){
            alert('Cart is full!');
            return;
        }
        else if (cartquantity<=10){
        cartquantity++;
        };
    }
    else if(n==2){
        if (cartquantity+2>10)
        alert('Cart is full!');
        else if (cartquantity<=10){
        cartquantity+=2;
        };
    }
    else if(n==3){
        if (cartquantity+3>10)
        alert('Cart is full!');
        else if (cartquantity<=10){
        cartquantity+=3;
        };
    }
    else if(n==4){
        if (cartquantity+4>10)
        alert('Cart is full!');
        else if (cartquantity<=10){
        cartquantity+=4;
        };
    }
    else if(n==5){
        if (cartquantity+5>10)
        alert('Cart is full!');
        else if (cartquantity<=10){
        cartquantity+=5;
        };
    }
    else if(n==-1){
        if (cartquantity-1<0)
        alert('not enough items in cart');
        else if(cartquantity-1>=0){
        cartquantity--;
        };
    }
    else if(n==-2){
        if (cartquantity-2<0)
        alert('not enough items in cart');
        else if(cartquantity-2>=0){
        cartquantity-=2;
        };
    }
    else if(n==-3){
        if (cartquantity-3<0)
        alert('not enough items in cart');
        else if(cartquantity-3>=0){
        cartquantity-=3;
        };
    }
    return cartquantity;
}