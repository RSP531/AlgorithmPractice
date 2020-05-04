using System;

namespace C_Sharp
{
    class Program
    {
        static void Main(string[] args)
        {
            string abString = "ABABAB";
            int counter = 0;
            int countA = 0;
            int countB = 0;

            char[] sArr = abString.ToCharArray();

            for(int i=0; i<sArr.Length;i++){
              if(sArr[i].Equals('A')) {
                countA++;
              }
              if(sArr[i].Equals('B')) {
                countB++;
              }
            }

            for (int i = 0; i < countA; i++) {
              if (sArr[i].Equals('B')) {
                abString.Remove(i,1);
                i--;
                countB--;
                counter++;
              }
            }

            for (int i = countA; i < abString.Length; i++) {
              if (sArr[i].Equals('A')) {
                abString.Remove(i,1);
                i--;
                countA--;
                counter++;
              }
            }
          Console.WriteLine(counter);
          return counter
        }
    }
}
