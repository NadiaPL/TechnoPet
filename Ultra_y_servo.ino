//Ultra
#include <Servo.h>

Servo myservo;  // create servo object to control a servo

const int Trigger = 2;          //Pin digital 2 para el Trigger del sensor
const int Echo    = 3;          //Pin digital 3 para el Echo del sensor
int LED           = 13;
int LED2 = 12;
int LED3 = 13;

int pos = 0;


void setup() 
{
  Serial.begin(9600);           //iniciailzamos la comunicación
  pinMode(Trigger, OUTPUT);     //pin como salida
  pinMode(Echo, INPUT);         //pin como entrada
  pinMode(LED, OUTPUT);
pinMode(LED2, OUTPUT);
pinMode(LED3, OUTPUT);
  
  digitalWrite(Trigger, LOW);   //Inicializamos el pin con 0
  digitalWrite(LED, INPUT);
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
}

void loop()
{
  long t;                       //timepo que demora en llegar el eco
  long d;                       //distancia en centimetros

  digitalWrite(Trigger, HIGH);
  delayMicroseconds(10);        //Enviamos un pulso de 10us
  digitalWrite(Trigger, LOW);
  
  t = pulseIn(Echo, HIGH);      //obtenemos el ancho del pulso
  d = t/59;                     //escalamos el tiempo a una distancia en cm

  Serial.print("Distancia: ");
  Serial.print(d);              //Enviamos serialmente el valor de la distancia
  Serial.print("cm");
  Serial.println();
  //delay(100);                   //Hacemos una pausa de 100ms
  
  if (d <= 60)
  {
      digitalWrite(LED, HIGH);
      digitalWrite(LED2, HIGH);
      digitalWrite(LED3, LOW);
      for (pos = 0; pos <= 280; pos += 1) { 
      myservo.write(pos);              // tell servo to go to position in variable 'pos'
      delay(1000);
       }
  }
  else if (d > 60)
  {
    digitalWrite(LED, LOW);
    digitalWrite(LED2, LOW);
      digitalWrite(LED3, HIGH);
    for (pos = 280; pos >= 0; pos -= 1) { 
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(1000); 
    }
  }



  }




