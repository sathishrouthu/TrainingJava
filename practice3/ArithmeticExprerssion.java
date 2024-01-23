package practice3;
import java.util.Scanner;
public class ArithmeticExprerssion {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int b = sc.nextInt();
		int c = sc.nextInt();
		String ans="";
		if(a+b==c)	ans +="Add";
		if(a-b==c)	ans +="\nSubstract";
		if(a*b==c) ans += "\nMultiply";
		if(a/b==c) ans +="\nDivide";
		if(a%b==c) ans +="\nModulo";
		if(ans.equals("")) ans="Not Possible";
		System.out.println(ans);
	}
}
