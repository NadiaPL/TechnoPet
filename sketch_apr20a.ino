#include <Servo.h>
Servo servomotor;
char opened;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  servomotor.attach(9);
  opened.attach(7);
  pinMode(2, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(7, INPUT);
  
  
  
}

void loop() {
  // put your main code here, to run repeatedly:

if (Serial.available()>0){
  delay(20);
opened = Serial.read();

if( opened == 1)
{
servomotor.write(90);
digitalWrite(2, HIGH);
digitalWrite(4, LOW);
}

else if ( opened == 0)
{
  servomotor.write(180);
  digitalWrite(2, LOW);
  digitalWrite(4, HIGH);
}

}
}
