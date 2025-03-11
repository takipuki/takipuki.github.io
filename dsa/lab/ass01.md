
# Assignment - 01

## 01
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

