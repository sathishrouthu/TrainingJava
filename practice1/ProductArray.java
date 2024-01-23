package practice1;

import java.util.Scanner;

public class ProductArray {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		if(n<0) {
			System.out.println("Invalid Input");
			System.exit(0);
		}
		int idx=0;
		int[] arr = new int[n];
		while(n>0) {
			arr[idx++] = sc.nextInt();
			n--;
		}
		int res=1;
		for(int i : arr) {
			if(i>9 && i<100) {
				res*=i;
			}
		}
		System.out.println(res);
		

	}

}
