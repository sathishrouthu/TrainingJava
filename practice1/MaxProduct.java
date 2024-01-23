package practice1;

import java.util.Scanner;

public class MaxProduct {
	public static void main(String args[]) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int idx=0;
		int[] arr = new int[n];
		while(n>0) {
			arr[idx++] = sc.nextInt();
			n--;
		}
		int maxProduct = Integer.MIN_VALUE;
		for(int i =0;i<arr.length;i++) {
			for(int j=i+1;j<arr.length;j++) {
				maxProduct = Math.max(maxProduct, arr[i]*arr[j]);
				
			}
		}
		System.out.println(maxProduct);
	}
}
