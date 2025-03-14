
# Assignment - 01

## 01

### Problem Statement
You are given a sorted array of distinct integers nums and a target value target. Your
task is to return the index if the target is found. If not, return the index where it would be
inserted in order.
You must implement an algorithm with $O(\log n)$ runtime complexity.

### Input
- The first line contains an integer $n$ &ndash; the number of elements in the array.
- The second line contains $n$ integers &ndash; sorted in non-decreasing order.
- The third line contains a single integer target &ndash; the value to find in the array.

### Output
- Print a single integer $idx$, the index where target is found or should be inserted.

### Test Cases

::: code-group
```[1]:no-line-numbers
Input:
4
1 3 5 6
5

Output:
2
```
```[2]:no-line-numbers
Input:
4
1 3 5 6
2

Output:
1
```
```[3]:no-line-numbers
Input:
4
1 3 5 6
7

Output:
4
```
:::

### Solution
```c
#include <stdio.h>

int *lower_bound(int *begin, int *end, int k) {
	begin -= 1;
	for (int j = (end-begin)/2; j; j /= 2) {
		for (; begin+j < end && begin[j] < k; )
			begin += j;
	}
	return begin + 1;
}

int main() {
	int n; scanf("%d", &n);
	int ar[n];
	for (int i = 0; i < n; i++)
		scanf("%d", ar+i);
	int k; scanf("%d", &k);

	printf("%d\n", lower_bound(ar, ar+n, k) - ar);
}
```


## 02

### Problem Statement
Given an array of integer nums sorted in non-decreasing order, find the
starting and ending position of a given target value.

If the target is not found in the array, print $[-1, -1]$.

You must write an algorithm with $O(\log n)$ runtime complexity.

### Input
- The first line contains an integer $n$ &ndash; the number of elements in the array.
- The second line contains $n$ integers &ndash; sorted in non-decreasing order.
- The third line contains a single integer target &ndash; the value to find in the array.

### Output
Print two space-separated integers $l$ and $r$, where:
- $l$ is the first occurrence index of the target value in the array.
- $r$ is the last occurrence index of the target value in the array.
- If the target does not exist, print `-1 -1`.

### Test Cases

::: code-group
```[1]:no-line-numbers
Input:
6
5 7 7 8 8 10
8

Output:
3 4
```
```[2]:no-line-numbers
Input:
6
5 7 7 8 8 10
6

Output:
-1 -1
```
```[3]:no-line-numbers
Input:
0

0

Output:
-1 -1
```
:::

### Solution
```c
#include <stdio.h>

int *lower_bound(int *begin, int *end, int k) {
	begin -= 1;
	for (int j = (end-begin)/2; j; j /= 2) {
		for (; begin+j < end && begin[j] < k; )
			begin += j;
	}
	return begin + 1;
}

int *upper_bound(int *begin, int *end, int k) {
	begin -= 1;
	for (int j = (end-begin)/2; j; j /= 2) {
		for (; begin+j < end && begin[j] <= k; )
			begin += j;
	}
	return begin + 1;
}

int main() {
	int n; scanf("%d", &n);
	int ar[n];
	for (int i = 0; i < n; i++)
		scanf("%d", ar+i);
	int k; scanf("%d", &k);

	int *a = lower_bound(ar, ar+n, k);
	int *b = upper_bound(ar, ar+n, k);
	if (a == ar+n || *a != k)
		printf("-1 -1\n");
	else
		printf("%d %d\n", a-ar,  b-ar-1);
}
```


## 03

### Problem Statement
You are given two strings $s$ and $t$ consisting of lowercase English letters. Your
task is to determine whether $t$ is an anagram of $s$.

A string $t$ is an anagram of $s$ if it is formed by rearranging the letters of $s$
without adding or removing any characters.

### Input
- The first line contains a string $s$ &ndash; the first string.
- The second line contains a string $t$ &ndash; the second string.
- Both $s$ and $t$ consist only of lowercase English letters ('a' to 'z').

### Output
- Print `YES` if $t$ is an anagram of $s$, otherwise print `NO`.

### Test Cases
::: code-group
```[1]:no-line-numbers
Input:
anagram
nagaram

Output:
YES
```
```[2]:no-line-numbers
Input:
rat
car

Output:
NO
```
:::

```c
#include <stdio.h>

int main() {
	int s[26] = {0}, t[26] = {0};
	for (char ch; (ch = getchar()) != '\n' && ch != EOF; ) {
		s[ch - 'a']++;
	}
	for (char ch; (ch = getchar()) != '\n' && ch != EOF; ) {
		t[ch - 'a']++;
	}

	for (int i = 0; i < 26; i++) {
		if (s[i] != t[i]) {
			printf("NO\n");
			return 0;
		}
	}
	printf("YES\n");
}
```


## 04

### Problem Statement
You are given an array nums containing $n$ distinct numbers in the range $[0,
n]$. Your task is to find and return the only number in this range that is
missing from the array.

### Input
- The first line contains an integer $n$ &ndash; the number of elements in the array.
- The second line contains n distinct integers $a_0, a_1, a_2, ..., a_{n-1}$ where
  $0 \le a \le n$.

### Output
- Print a single integer &ndash; the missing number in the range $[0, n]$.

### Test Cases
::: code-group
```[1]:no-line-numbers
Input:
3
3 0 1

Output:
2
```
```[2]:no-line-numbers
Input:
4
0 1 2 4

Output:
3
```
:::

### Solution
```c
#include <stdio.h>

int main() {
	int n; scanf("%d", &n);
	int ar[n+1];
	for (int i = 0; i <= n; i++) {
		ar[i] = 0;
	}

	for (int i = 0, a; i < n; i++) {
		scanf("%d", &a);
		ar[a]++;
	}

	for (int i = 0; i <= n; i++) {
		if (!ar[i]) {
			printf("%d\n", i);
			return 0;
		}
	}
}
```


## 05

### Problem Statement
You are given a sorted array nums containing $n$ distinct numbers in the range
$[0, n]$ in strictly increasing order. Your task is to find and return the only
number in this range that is missing from the array.

You must implement an algorithm with $O(\log n)$ runtime complexity.

### Input
- The first line contains an integer $n$ &ndash; the number of elements in the array.
- The second line contains $n$ distinct integers representing the given sorted
  array in strictly increasing order.

### Output
- Print a single integer &ndash; the missing number in the range $[0, n]$.

### Test Cases
::: code-group
```[1]:no-line-numbers
Input:
3
0 1 3

Output:
2
```
```[2]:no-line-numbers
Input:
4
0 1 2 4

Output:
3
```
:::

### Solution
```c
#include <stdio.h>

int solve(int *ar, int n) {
	int i = -1;
	for (int j = n/2; j; j /= 2) {
		for (; i+j < n && ar[i+j] == i+j; )
			i += j;
	}
	return i+1;
}

int main() {
	int n; scanf("%d", &n);
	int ar[n];
	for (int i = 0, a; i < n; i++) {
		scanf("%d", ar+i);
	}

	printf("%d\n", solve(ar, n));
}
```


## 06

### Problem Statement
You are given a positive integer $num$. Your task is to determine whether $num$
is a perfect square.

A perfect square is an integer that is the square of an integer. In other
words, it is the product of some integer with itself.

You must not use any built-in library functions such as sqrt. You must
implement an algorithm with $O(\log n)$ runtime complexity.

### Input
- The first and only line contains a single integer $num$.

### Output
- Print `YES` if $num$ is a perfect square, otherwise print `NO`.

### Test Cases
::: code-group
```[1]:no-line-numbers
Input:
16

Output:
YES
```
```[2]:no-line-numbers
Input:
14

Output:
NO
```
:::

### Solution
```c
#include <stdio.h>

int is_square(int n) {
	int i = 0;
	for (int j = n/2 + (n&1); j; j /= 2) {
		for (; (i+j)*(i+j) <= n; )
			i += j;
	}
	return i*i == n;
}

int main() {
	int n; scanf("%d", &n);
	printf("%s\n", is_square(n) ? "YES" : "NO");
}
```


## 07

### Problem Statement
You are given a non-negative number $N$, and your task is to calculate its square
root to a precision of $10^{-3}$.

The square root of a number is a value that, when multiplied by itself, gives
the original number.

### Input
- The input consists of a single floating-point number $N$.

### Output
- Output the square root of $N$, rounded to 3 decimal places.

### Test Cases
::: code-group
```[1]:no-line-numbers
Input:
16

Output:
4.000
```
```[2]:no-line-numbers
Input:
2

Output:
1.414
```
```[3]:no-line-numbers
Input:
0

Output:
0.000
```
:::

### Solution
```c
#include <stdio.h>

float Abs(float f) {
	return f < 0 ? -f : f;
}

float Sqrt(int n, float guess) {
	if (Abs(n - guess*guess) <= 1e-4) return guess;
	return Sqrt(n, (n/guess + guess)/2);
}

int main() {
	int n; scanf("%d", &n);
	printf("%.3f\n", Sqrt(n, (float)n/2));
}
```

