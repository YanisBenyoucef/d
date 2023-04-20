const tab = [100,50,20,10,5,2,1];
function rendre_la_monnaie(a,b,c){
 
   
    if(a==0){
      console.log(b);
        return b;
    }
   
        if(a>=100){
        b.push(tab[c]);
        a=a-tab[c];
        rendre_la_monnaie(a,b,c);
       
        }
        if(a>=tab[c]){
          b.push(tab[c]);
         a= a-tab[c];
        rendre_la_monnaie(a,b,c+1);
        }
       
        rendre_la_monnaie(a,b,c+1);
    }


const glo = rendre_la_monnaie(221,[],0);