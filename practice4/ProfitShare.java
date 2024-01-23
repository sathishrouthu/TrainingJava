package practice4;
import java.util.*;
public class ProfitShare {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		double amount = sc.nextDouble();
		int r = sc.nextInt();
		int g = sc.nextInt();
		int s = sc.nextInt();
		double totalShares = r+g+s;
		double ramu =  ( (double) r/totalShares )*amount;
		double gopu =  ( (double) g/totalShares )*amount;
		double somu =  ( (double) s/totalShares )*amount;
		System.out.printf("%.2f\n%.2f\n%.2f",ramu,gopu,somu);
	}

}
