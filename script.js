
			var pracownicy = {
						
				liczba:0,
				drwal:0,
				kamieniarz:0,
				ukosnik:"/4",
				
				dodajKamieniarza : function()
				{
					this.kamieniarz += 1;
					
					
					if(this.kamieniarz > 2)
					{
						this.kamieniarz = 2;
					}
					
					else
					{
						this.kamieniarz = this.kamieniarz;
					}
					
					this.liczba = this.drwal + this.kamieniarz + this.ukosnik;
					document.getElementById("liczba").innerHTML = this.liczba;	
				},
				
				
				
				usunKamieniarza : function()
				{
					this.kamieniarz -= 1;
					
					if(this.kamieniarz < 0)
					{
						this.kamieniarz = 0;
					}
					
					else
					{
						this.kamieniarz = this.kamieniarz;
					}
				
					this.liczba = this.drwal + this.kamieniarz + this.ukosnik;
					document.getElementById("liczba").innerHTML = this.liczba;
				},
				
				dodajDrwala : function()
				{
					this.drwal += 1;
					
					if(this.drwal > 2)
						{
							this.drwal = 2;
						}
						else
						{
							this.drwal = this.drwal;
						}		
									
						this.liczba = this.drwal + this.kamieniarz + this.ukosnik;
						document.getElementById("liczba").innerHTML = this.liczba;
							
				},
				
			
				
				usunDrwala : function()
				{
					this.drwal -= 1;
					
					if(this.drwal < 0)
						{
							this.drwal = 0;
						}
					else
						{
							this.drwal = this.drwal;
						}		
						
						this.liczba = this.drwal + this.kamieniarz + this.ukosnik;
						document.getElementById("liczba").innerHTML = this.liczba;						
				},	
			}
			
			var zasoby = {

				monety:10,
				drewno:0,
				kamienie:0,
				deska:0,
				cement:0,
				szklo:0,
				cegla:0,
				imperator1:0,
				x:"x",
				$:"$",
				plusik:"<button onclick = \"dodaj.dodajDeske()\">+</button>",
				plusik1:"<button onclick = \"dodaj.dodajCement()\">+</button>",
				plusik2:"<button onclick = \"dodaj.dodajCegle()\">+</button>",
				plusik3:"<button onclick = \"dodaj.dodajSzklo()\">+</button>",
				zakaz:"<img src=\"images/zakaz.png\" width = \"30px\" height =\"40px\" />",		
				fajka:"<img src=\"images/fajka.png\" width = \"35px\" height =\"45px\" />",
				
				decha:"<img src=\"images/deska.png\" />",
				worek:"<img src = \"images/cement.png\" />",
				cegielka:"<img src = \"images/cegla.png\" />",
				imperator:"<img src = \"images/imperator.png\" class = \"obrazki\" />",
				szkielko:"<img src = \"images/szklo.png\" class = \"obrazki\" />",
				
				deska_drewno:"<img src=\"images/drewnodeska.png\" width = \"120px\" height =\"60px\" />",
				kamien_cement:"<img src = \"images/kamiencement.png\" width = \"120px\" height =\"60px\" />",
				kamien_cegla_cement:"<img src = \"images/kamien_cegla_cement.png\" width = \"120px\" height =\"40px\" />",
				kamien_szklo:"<img src = \"images/kamien_szklo.png\" width = \"120px\" height =\"40px\" />",
				bet:"<img src = \"images/bet.png\" width = \"80px\" height =\"40px\" />",
				rakieta1:"<img src = \"images/rakieta1.jpg\" width = \"50px\" height =\"40px\" />",
				sprzedaj:"<button onclick = \"sprzedaj.sprzedajDeske()\" class = \"litery\">SPRZEDAJ</button>",
				sprzedaj1:"<button onclick = \"sprzedaj.sprzedajCement()\" class = \"litery\">SPRZEDAJ</button>",
				sprzedajX:"<button onclick = \"sprzedaj.sprzedajSzklo()\" class = \"litery\">SPRZEDAJ</button>",
				sprzedaj2:"<button onclick = \"sprzedaj.sprzedajCegle()\" class = \"litery\">SPRZEDAJ</button>",
				stan_sie:"<button onclick = \"zamek.stan_sie()\" class = \"litery\">Stań się imperatorem</button>",
				zamieszkaj1:"<button onclick = \"willa.zamieszkajWilla()\" class = \"litery\">ZAMIESZKAJ</button>",
				zamieszkaj2:"<button onclick = \"dom.zamieszkajDom()\" class = \"litery\">ZAMIESZKAJ</button>",
				zamieszkaj3:"<button onclick = \"centrum.zamieszkajCentrum()\" class = \"litery\">ZAMIESZKAJ</button>",
				zamieszkaj4:"<button onclick = \"hotel.zamieszkajHotel()\" class = \"litery\">ZAMIESZKAJ</button>",
				lec:"<button onclick = \"rakieta.lec()\" class = \"litery\">ODLATUJ</button>",
			
			
			
			
			
			
				iloscKamieni : function()
				{	
					if(pracownicy.kamieniarz == 0)
					{
						this.kamienie = this.kamienie;
						document.getElementById("iloscKamieni").innerHTML = this.kamienie + this.x;
						setTimeout("zasoby.iloscKamieni()",1000);
					}						
					else if(pracownicy.kamieniarz == 1)	
					{						
						this.kamienie = this.kamienie + 1;
						document.getElementById("iloscKamieni").innerHTML = this.kamienie + this.x;	
						setTimeout("zasoby.iloscKamieni()",3000);	
					}		
					else if(pracownicy.kamieniarz == 2)
					{						
						this.kamienie = this.kamienie + 1;
						document.getElementById("iloscKamieni").innerHTML = this.kamienie + this.x;	
						setTimeout("zasoby.iloscKamieni()",1000);	
					}		
				},
			
				iloscDrewna : function()
				{	
					if(pracownicy.drwal == 0)
					{
						this.drewno = this.drewno;
						document.getElementById("iloscDrewna").innerHTML = this.drewno + this.x;
						setTimeout("zasoby.iloscDrewna()",1000);
					}						
					else if(pracownicy.drwal == 1)	
					{						
						this.drewno = this.drewno + 1;
						document.getElementById("iloscDrewna").innerHTML = this.drewno + this.x;	
						setTimeout("zasoby.iloscDrewna()",3000);	
					}		
					else if(pracownicy.drwal == 2)
					{						
						this.drewno = this.drewno + 1;
						document.getElementById("iloscDrewna").innerHTML = this.drewno + this.x;	
						setTimeout("zasoby.iloscDrewna()",1000);	
					}		
				},
			}
			
			
			
	
			
			var tartak = 
			{
				budujTartak : function()
				{
					if((zasoby.drewno >= 8) && (zasoby.kamienie >= 4))
					{
						document.getElementById("decha").innerHTML = zasoby.decha;
						document.getElementById("mlotek1").innerHTML = zasoby.plusik;
						document.getElementById("lista1").innerHTML = zasoby.deska_drewno;
						document.getElementById("sprzedaj1").innerHTML = zasoby.sprzedaj;
						document.getElementById("pasek3").innerHTML = zasoby.fajka;
						document.getElementById("iloscDesek").innerHTML = zasoby.deska + zasoby.x;
						zasoby.drewno = zasoby.drewno - 8; 
						document.getElementById("iloscDrewna").innerHTML = zasoby.drewno + zasoby.x;
						zasoby.kamienie = zasoby.kamienie - 4; 
						document.getElementById("iloscKamieni").innerHTML = zasoby.kamienie + zasoby.x;
					}
					
					else if((zasoby.drewno < 8) && (zasoby.kamienie < 4))
					{
						alert("Masz za mało drewna i kamieni!");
					}
					
					else if(zasoby.kamienie < 4)
					{
						alert("Masz za mało kamieni!");
					}
					
					else
					{
						alert("Masz za mało drewna!");
					}
				},	
			}
				
			var mlyn = 
			{
			
			budujMlyn : function()
				{
					if((zasoby.drewno >= 4) && (zasoby.kamienie >= 16) && (zasoby.deska >= 8))
					{
						document.getElementById("mlotek2").innerHTML = zasoby.plusik1;
						document.getElementById("lista2").innerHTML = zasoby.kamien_cement;
						document.getElementById("cement").innerHTML = zasoby.worek;
						document.getElementById("sprzedaj2").innerHTML = zasoby.sprzedaj1;
						document.getElementById("pasek4").innerHTML = zasoby.fajka;
						document.getElementById("iloscCementu").innerHTML = zasoby.cement + zasoby.x;
						zasoby.drewno = zasoby.drewno - 4; 
						document.getElementById("iloscDrewna").innerHTML = zasoby.drewno + zasoby.x;
						zasoby.kamienie = zasoby.kamienie - 16; 
						document.getElementById("iloscKamieni").innerHTML = zasoby.kamienie + zasoby.x;
						zasoby.deska = zasoby.deska - 8; 
						document.getElementById("iloscDesek").innerHTML = zasoby.deska + zasoby.x;
					}
					
					else if((zasoby.drewno < 4) && (zasoby.kamienie < 16) && (zasoby.deska < 8))
					{
						alert("Masz za mało wszystkiego!");
					}
					
					else if((zasoby.kamienie < 16) && (zasoby.drewno < 4))
					{
						alert("Masz za mało drewna i kamieni!");
					}
					
					else if(zasoby.kamienie < 16)
					{
						alert("Masz za mało kamieni!");
					}
					
					else
					{
						alert("Masz za mało drewna lub desek!");
					}
				},	
			}	
			
			var fabryka = 
			{
				
				budujFabryke : function()
				{
					if((zasoby.drewno >= 2) && (zasoby.kamienie >= 15) && (zasoby.cement >= 10))
					{
						document.getElementById("mlotek3").innerHTML = zasoby.plusik2;
						document.getElementById("lista3").innerHTML = zasoby.kamien_cegla_cement;
						document.getElementById("cegielka").innerHTML = zasoby.cegielka;
						document.getElementById("sprzedaj3").innerHTML = zasoby.sprzedaj2;
						document.getElementById("pasek5").innerHTML = zasoby.fajka;
						document.getElementById("iloscCegiel").innerHTML = zasoby.cegla + zasoby.x;
						zasoby.drewno = zasoby.drewno - 2; 
						document.getElementById("iloscDrewna").innerHTML = zasoby.drewno + zasoby.x;
						zasoby.kamienie = zasoby.kamienie - 15; 
						document.getElementById("iloscKamieni").innerHTML = zasoby.kamienie + zasoby.x;
						zasoby.cement = zasoby.cement - 10; 
						document.getElementById("iloscCementu").innerHTML = zasoby.cement + zasoby.x;
					}
					
					else if((zasoby.drewno < 2) && (zasoby.kamienie < 15) && (zasoby.cement < 10))
					{
						alert("Masz za mało wszystkiego!");
					}
					
					else if((zasoby.kamienie < 15) && (zasoby.drewno < 2))
					{
						alert("Masz za mało drewna i kamieni!");
					}
					
					else if(zasoby.kamienie < 15)
					{
						alert("Masz za mało kamieni!");
					}
					
					else
					{
						alert("Masz za mało drewna lub cementu!");
					}
				},	
			}
			
			var huta = 
			{
				budujHute : function()
				{
					if((zasoby.kamienie >= 10) && (zasoby.cement >= 10))
					{
						document.getElementById("mlotekX").innerHTML = zasoby.plusik3;
						document.getElementById("listaX").innerHTML = zasoby.kamien_szklo;
						document.getElementById("pasekX").innerHTML = zasoby.fajka;
						document.getElementById("iloscSzkla").innerHTML = zasoby.szklo + zasoby.x;
						document.getElementById("szkielko").innerHTML = zasoby.szkielko;
						document.getElementById("sprzedajX").innerHTML = zasoby.sprzedajX;			
						
						zasoby.kamienie = zasoby.kamienie - 10; 
						document.getElementById("iloscKamieni").innerHTML = zasoby.kamienie + zasoby.x;
						zasoby.cement = zasoby.cement - 10; 
						document.getElementById("iloscCementu").innerHTML = zasoby.cement + zasoby.x;
					}
					
					else if((zasoby.kamienie < 10) && (zasoby.cement < 10))
					{
						alert("Masz za mało wszystkiego!");
					}
					
					else if(zasoby.kamienie < 10) 
					{
						alert("Masz za mało kamieni!");
					}
					
					else if(zasoby.cement < 10)
					{
						alert("Masz za mało cementu!");
					}
				},	
			}
			
			var dodaj =
			{
				dodajDeske : function()
				{
					if(zasoby.drewno >= 1)
						{
							zasoby.deska += 5;
							document.getElementById("iloscDesek").innerHTML = zasoby.deska + zasoby.x;
							zasoby.drewno -= 1;
							document.getElementById("iloscDrewna").innerHTML = zasoby.drewno+ zasoby.x;
						}	
				},
				
				dodajCement : function()
				{
					if(zasoby.kamienie >= 1)
						{
							zasoby.cement += 5;
							document.getElementById("iloscCementu").innerHTML = zasoby.cement + zasoby.x;
							zasoby.kamienie -= 1;
							document.getElementById("iloscKamieni").innerHTML = zasoby.kamienie + zasoby.x;
						}	
				},
				
				dodajSzklo : function()
				{
					if(zasoby.kamienie >= 1) 
						{
							zasoby.kamienie -= 1;
							document.getElementById("iloscKamieni").innerHTML = zasoby.kamienie + zasoby.x;
							zasoby.szklo += 1;
							document.getElementById("iloscSzkla").innerHTML = zasoby.szklo + zasoby.x;			
						}	
				},
				
				dodajCegle : function()
				{
					if((zasoby.kamienie >= 2) && (zasoby.cement >= 2)) 
						{
							zasoby.cegla += 2;
							document.getElementById("iloscCegiel").innerHTML = zasoby.cegla + zasoby.x;
							zasoby.cement -= 2;
							document.getElementById("iloscCementu").innerHTML = zasoby.cement + zasoby.x;
							zasoby.kamienie -= 2;
							document.getElementById("iloscKamieni").innerHTML = zasoby.kamienie + zasoby.x;
						}	
				},
				

			}
					
			var sprzedaj = 
			{
				
				sprzedajKamien : function()
				{
					if(zasoby.kamienie > 0)
					{
						zasoby.kamienie -= 1;
						document.getElementById("iloscKamieni").innerHTML = zasoby.kamienie + zasoby.x;
						zasoby.monety += 10;
						document.getElementById("portfel").innerHTML = zasoby.monety + zasoby.$;
					}
				},
				
				sprzedajDrewno : function()
				{
					if(zasoby.drewno > 0)
					{
						zasoby.drewno -= 1;
						document.getElementById("iloscDrewna").innerHTML = zasoby.drewno + zasoby.x;
						zasoby.monety += 5;
						document.getElementById("portfel").innerHTML = zasoby.monety + zasoby.$;
					}
				},
				
				sprzedajDeske : function()
				{
					if(zasoby.deska > 0)
					{
						zasoby.deska -= 1;
						document.getElementById("iloscDesek").innerHTML = zasoby.deska + zasoby.x;
						zasoby.monety += 3;
						document.getElementById("portfel").innerHTML = zasoby.monety + zasoby.$;
					}	
				},
				
				sprzedajCement : function()
				{
					if(zasoby.cement > 0)
					{
						zasoby.cement -= 1;
						document.getElementById("iloscCementu").innerHTML = zasoby.cement + zasoby.x;
						zasoby.monety += 2;
						document.getElementById("portfel").innerHTML = zasoby.monety + zasoby.$;
					}	
				},
				
				sprzedajSzklo: function()
				{
					if(zasoby.szklo > 0)
					{
						zasoby.szklo -= 1;
						document.getElementById("iloscSzkla").innerHTML = zasoby.szklo + zasoby.x;
						zasoby.monety += 10;
						document.getElementById("portfel").innerHTML = zasoby.monety + zasoby.$;
					}	
				},
				
				sprzedajCegle : function()
				{
					if(zasoby.cegla > 0)
					{
						zasoby.cegla -= 1;
						document.getElementById("iloscCegiel").innerHTML = zasoby.cegla + zasoby.x;
						zasoby.monety += 20;
						document.getElementById("portfel").innerHTML = zasoby.monety + zasoby.$;
					}	
				},
			}
					
			var paski = 
			{
				pasek:0,
				pasek1:0,
				
			
				pasekKamieniarz : function()
				{
					if(pracownicy.kamieniarz > 0)
					{
						if(document.getElementById('pasek1').style.width == "120px")
							{
								document.getElementById('pasek1').style.width = "0px" ;
								this.pasek = 0;
							}
							this.pasek += 40;
							document.getElementById("pasek1").style.width = this.pasek + "px";
							setTimeout("paski.pasekKamieniarz()",1000);
					}
							
					else
					{
							this.pasek = this.pasek;
							document.getElementById("pasek1").style.width = this.pasek + "px";
							setTimeout("paski.pasekKamieniarz()",1000);
					}
				},
				
				pasekDrwal : function()
				{
					if(pracownicy.drwal > 0)
					{
						if(document.getElementById('pasek2').style.width == "120px")
							{
								document.getElementById('pasek2').style.width = "0px" ;
								this.pasek1 = 0;
							}
							this.pasek1 += 40;
							document.getElementById("pasek2").style.width = this.pasek1 + "px";
							setTimeout("paski.pasekDrwal()",1000);
					}
					
					else
					{
							this.pasek1 = this.pasek1;
							document.getElementById("pasek2").style.width = this.pasek1 + "px";
							setTimeout("paski.pasekDrwal()",1000);
					}
				},
			}	
			
				
			var zamek = 
			{
				budujZamek : function()
				{
					if((zasoby.cegla >= 10) && (zasoby.kamienie >= 10) && (zasoby.cement >= 10))
					{
						document.getElementById("mlotek4").innerHTML = zasoby.fajka;
						document.getElementById("lista4").innerHTML = zasoby.fajka;
						document.getElementById("pasek6").innerHTML = zasoby.fajka;
						document.getElementById("imper_ator").innerHTML = zasoby.imperator1 + zasoby.x;
						document.getElementById("imperator").innerHTML = zasoby.imperator;
						document.getElementById("stanSie").innerHTML = zasoby.stan_sie;
						
						zasoby.cegla = zasoby.cegla - 10; 
						document.getElementById("iloscCegiel").innerHTML = zasoby.cegla + zasoby.x;
						zasoby.kamienie = zasoby.kamienie - 10; 
						document.getElementById("iloscKamieni").innerHTML = zasoby.kamienie + zasoby.x;
						zasoby.cement = zasoby.cement - 10; 
						document.getElementById("iloscCementu").innerHTML = zasoby.cement + zasoby.x;
					}
					
					else if((zasoby.cegla < 10) && (zasoby.kamienie < 10) && (zasoby.cement < 10))
					{
						alert("Masz za mało wszystkiego!");
					}
					
					else if((zasoby.kamienie < 10) && (zasoby.cegla < 10))
					{
						if(zasoby.kamienie < 10)
						{
							alert("Masz za mało kamieni!");
						}
						
						else
						{
							alert("Masz za mało cegieł!");
						}
						
					}
					
					else if(zasoby.cement < 10)
					{
						alert("Masz za mało cementu!");
					}
				},
				
				
				stan_sie : function()
				{
					if((zasoby.monety >= 100) && (zasoby.imperator1 < 1))
					{
						zasoby.monety -= 100;
						document.getElementById("portfel").innerHTML = zasoby.monety + zasoby.$;
						zasoby.imperator1 == 1;
						document.getElementById("imper_ator").innerHTML = zasoby.imperator1 + 1 + zasoby.x;
						
						
						
						
						
						document.getElementById("pierwszy").style.backgroundColor = "green";
						
						
						
						
						
						
						
						
						
						
						
						document.getElementById("zamieszkac_zero").innerHTML = zasoby.fajka;
						
						
						
						
						
						
						
						
						
						
						
					}
					
					else if(zasoby.imperator1 == 1)
					{
						alert("Niestety nie można zostać imperatorem drugi raz :(");
						zasoby.monety = zasoby.monety;
						document.getElementById("portfel").innerHTML = zasoby.monety + zasoby.$;
					}
					
					else 
					{
						alert("Aby zostać imperatorem musisz posiadać min. 100$");
					}
				},
			}	
				
			var willa = 
			{
				budujWille : function()
				{
					if((zasoby.cegla >= 20) && (zasoby.kamienie >= 15) && (zasoby.cement >= 15))
					{
						document.getElementById("mlotek5").innerHTML = zasoby.fajka;
						document.getElementById("lista5").innerHTML = zasoby.fajka;
						document.getElementById("pasek7").innerHTML = zasoby.fajka;
						document.getElementById("bet").innerHTML = zasoby.bet;
						document.getElementById("zamieszkaj1").innerHTML = zasoby.zamieszkaj1;

						
						zasoby.cegla = zasoby.cegla - 20; 
						document.getElementById("iloscCegiel").innerHTML = zasoby.cegla + zasoby.x;
						zasoby.kamienie = zasoby.kamienie - 15; 
						document.getElementById("iloscKamieni").innerHTML = zasoby.kamienie + zasoby.x;
						zasoby.cement = zasoby.cement - 15; 
						document.getElementById("iloscCementu").innerHTML = zasoby.cement + zasoby.x;
					}
					
					else if((zasoby.cegla < 20) && (zasoby.kamienie < 15) && (zasoby.cement < 15))
					{
						alert("Masz za mało wszystkiego!");
					}
					
					else if((zasoby.kamienie < 15) && (zasoby.cegla < 15))
					{
						alert("Masz za mało kamieni lub cegieł");
					}
					else if(zasoby.cement < 15)
					{
						alert("Masz za mało cementu!");
					}
				},
				
				zamieszkajWilla : function()
				{
					document.getElementById("drugi").style.backgroundColor = "green";
					document.getElementById("zamieszkac_raz").innerHTML = zasoby.fajka;
					document.getElementById("zamieszkac_dwa").innerHTML = zasoby.fajka;
				}
				
		
			}
			
			var dom = 
			{
				budujDom : function()
				{
					if((zasoby.cegla >= 20) && (zasoby.kamienie >= 15) && (zasoby.cement >= 20))
					{
						document.getElementById("mlotek6").innerHTML = zasoby.fajka;
						document.getElementById("lista8").innerHTML = zasoby.fajka;
						document.getElementById("pasek8").innerHTML = zasoby.fajka;
						document.getElementById("bet2").innerHTML = zasoby.bet;
						document.getElementById("zamieszkaj2").innerHTML = zasoby.zamieszkaj2;

						
						zasoby.cegla = zasoby.cegla - 20; 
						document.getElementById("iloscCegiel").innerHTML = zasoby.cegla + zasoby.x;
						zasoby.kamienie = zasoby.kamienie - 15; 
						document.getElementById("iloscKamieni").innerHTML = zasoby.kamienie + zasoby.x;
						zasoby.cement = zasoby.cement - 20; 
						document.getElementById("iloscCementu").innerHTML = zasoby.cement + zasoby.x;
					}
					
					else if((zasoby.cegla < 20) && (zasoby.kamienie < 15) && (zasoby.cement < 20))
					{
						alert("Masz za mało wszystkiego!");
					}
					
					else if((zasoby.kamienie < 15) && (zasoby.cegla < 20))
					{
						alert("Masz za mało kamieni lub cegieł");
					}
					else if(zasoby.cement < 20)
					{
						alert("Masz za mało cementu!");
					}
				},
				
					zamieszkajDom : function()
				{
					document.getElementById("trzeci").style.backgroundColor = "green";
					document.getElementById("zamieszkac_trzy").innerHTML = zasoby.fajka;
					document.getElementById("zamieszkac_cztery").innerHTML = zasoby.fajka;
				}
				
			}
			
			var centrum = 
			{
				budujCentrum : function()
				{
					if((zasoby.cegla >= 20) && (zasoby.kamienie >= 20) && (zasoby.szklo >= 20))
					{
						document.getElementById("mlotek7").innerHTML = zasoby.fajka;
						document.getElementById("lista9").innerHTML = zasoby.fajka;
						document.getElementById("pasek9").innerHTML = zasoby.fajka;
						document.getElementById("bet3").innerHTML = zasoby.bet;
						document.getElementById("zamieszkaj3").innerHTML = zasoby.zamieszkaj3;

						
						zasoby.cegla = zasoby.cegla - 20; 
						document.getElementById("iloscCegiel").innerHTML = zasoby.cegla + zasoby.x;
						zasoby.kamienie = zasoby.kamienie - 20; 
						document.getElementById("iloscKamieni").innerHTML = zasoby.kamienie + zasoby.x;
						zasoby.szklo = zasoby.szklo - 20; 
						document.getElementById("iloscSzkla").innerHTML = zasoby.szklo + zasoby.x;
					}
					
					else if((zasoby.cegla < 20) && (zasoby.kamienie < 20) && (zasoby.szklo < 20))
					{
						alert("Masz za mało wszystkiego!");
					}
					
					else if((zasoby.kamienie < 20) && (zasoby.cegla < 20))
					{
						alert("Masz za mało kamieni lub cegieł");
					}
					else if(zasoby.szklo < 20)
					{
						alert("Masz za mało szkła!");
					}
				},
				
					zamieszkajCentrum: function()
				{
					document.getElementById("czwarty").style.backgroundColor = "green";
					document.getElementById("zamieszkac_piec").innerHTML = zasoby.fajka;
					document.getElementById("zamieszkac_szesc").innerHTML = zasoby.fajka;
				}
			}
			
			var hotel = 
			{
				budujHotel: function()
				{
					if((zasoby.cegla >= 15) && (zasoby.cement >= 10) && (zasoby.szklo >= 25))
					{
						document.getElementById("mlotek8").innerHTML = zasoby.fajka;
						document.getElementById("lista10").innerHTML = zasoby.fajka;
						document.getElementById("pasek10").innerHTML = zasoby.fajka;
						document.getElementById("bet4").innerHTML = zasoby.bet;
						document.getElementById("zamieszkaj4").innerHTML = zasoby.zamieszkaj4;

						
						zasoby.cegla = zasoby.cegla - 15; 
						document.getElementById("iloscCegiel").innerHTML = zasoby.cegla + zasoby.x;
						zasoby.cement = zasoby.cement - 10; 
						document.getElementById("iloscCementu").innerHTML = zasoby.cement + zasoby.x;
						zasoby.szklo = zasoby.szklo - 25; 
						document.getElementById("iloscSzkla").innerHTML = zasoby.szklo + zasoby.x;
					}	
				},
				
					zamieszkajHotel: function()
				{
					document.getElementById("piaty").style.backgroundColor = "green";
					document.getElementById("zamieszkac_siedem").innerHTML = zasoby.fajka;
					document.getElementById("zamieszkac_osiem").innerHTML = zasoby.fajka;
				},
			}
			
			var rakieta = 
			{
				budujRakiete : function()
				{
					if(zasoby.monety >= 300)
					{
						document.getElementById("mlotek9").innerHTML = zasoby.fajka;
						document.getElementById("lista11").innerHTML = zasoby.fajka;
						document.getElementById("pasek11").innerHTML = zasoby.fajka;
						document.getElementById("bet5").innerHTML = zasoby.rakieta1;
						document.getElementById("lec").innerHTML = zasoby.lec;
						zasoby.monety -= 300;
						document.getElementById("portfel").innerHTML = zasoby.monety + zasoby.$;
					}	
					
					else
					{
						alert("Masz za mało pieniędzy :(");
					}
				},
				
					lec : function()
				{
					document.getElementById("szosty").style.backgroundColor = "green";
					document.getElementById("zamieszkac_dziewiec").innerHTML = zasoby.fajka;
					document.getElementById("zamieszkac_dziesiec").innerHTML = zasoby.fajka;
				},
				
			}
			