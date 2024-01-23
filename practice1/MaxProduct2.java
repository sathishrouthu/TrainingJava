package practice1;

import java.util.Scanner;

public class MaxProduct2 {
	public static boolean isExists(int[] arr,int x) {
		for(int i:arr) {
			if(i==x) return true;
		}
		return false;
	}
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int arr[] = new int[n];
		for(int i=0;i<n;i++) {
			arr[i] = sc.nextInt();
		}
		int maxProduct = -1;
		for(int i =0;i<n;i++) {
			for(int j=i+1;j<n;j++) {
				int product = arr[i]*arr[j];
				if(isExists(arr,product)) {
					maxProduct = Math.max(maxProduct, product);
				}
			}
		}
		System.out.println(maxProduct);
	}
}
