bash jdk-6u45-linux-i586.bin

sudo mv jdk1.6.0_45/ /usr/lib/jvm/

sudo update-alternatives --install /usr/bin/javac javac /usr/lib/jvm/jdk1.6.0_45/bin/javac 0
sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/jdk1.6.0_45/bin/java 0
sudo update-alternatives --install /usr/bin/javaws javaws /usr/lib/jvm/jdk1.6.0_45/bin/javaws 0

sudo update-alternatives --config javac
# please select choice
sudo update-alternatives --config java
# please select choice
