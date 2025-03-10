---
prev: false
---

# Sort

## Bubble

```cpp
#include <iostream>
using namespace std;
#define nl '\n'

void sort(int *ar, int size) {
	if (!size) return;
	for (int i = size-1; i; i--) {
		for (int j = 0; j < i; j++) {
			if (ar[j] > ar[j+1])
				swap(ar[j], ar[j+1]);
		}
	}
}

int main() {
	int n; cin >> n;
	int ar[n];
	for (int i = 0; i < n; i++)
		cin >> ar[i];

	sort(ar, n);

	for (int i = 0; i < n; i++)
		cout << ar[i] << ' '; cout << nl;
}
```


## Insertion

```cpp
#include <iostream>
using namespace std;
#define nl '\n'

void sort(int *ar, int size) {
	if (!size) return;
	for (int i = 0; i < size-1; i++) {
		int k = ar[i+1];
		int j;
		for (j = i; j >= 0 and ar[j] > k; j--)
			ar[j+1] = ar[j];
		ar[j+1] = k;
	}
}

int main() {
	int n; cin >> n;
	int ar[n];
	for (int i = 0; i < n; i++)
		cin >> ar[i];

	sort(ar, n);

	for (int i = 0; i < n; i++)
		cout << ar[i] << ' '; cout << nl;
}
```


## Merge

```cpp
#include <iostream>
using namespace std;
#define nl '\n'

int *merge(int *a, int an, int *b, int bn) {
	int *c = (int*)malloc(sizeof(int)*(an+bn));
	int i = 0, j = 0, k = 0;
	for (; i < an and j < bn; ) {
		if (a[i] < b[j]) c[k++] = a[i++];
		else c[k++] = b[j++];
	}
	for (; i < an; i++) c[k++] = a[i];
	for (; j < bn; j++) c[k++] = b[j];
	return c;
}

int *sort(int *ar, int size) {
	if (size == 0) return NULL;
	if (size == 1) {
		int *c = (int*)malloc(sizeof(int));
		*c = *ar;
		return c;
	}
	int mid = size/2;
	int *a = sort(ar, mid);
	int *b = sort(ar+mid, size-mid);
	int *c = merge(a, mid, b, size-mid);
	free(a);
	free(b);
	return c;
}

int main() {
	int n; cin >> n;
	int ar[n];
	for (int i = 0; i < n; i++)
		cin >> ar[i];

	int *br = sort(ar, n);

	for (int i = 0; i < n; i++)
		cout << br[i] << ' '; cout << nl;
}
```


## Quick

```cpp
#include <iostream>
using namespace std;
#define nl '\n'

void sort(int *a, int *b) {
	if (b-a <= 1) return;
	int *pivot = a;
	for (int *i = a+1; i < b; i++) {
		if (*i < *pivot) {
			swap(*i, *pivot);
			pivot++;
			swap(*i, *pivot);
		}
	}
	sort(a, pivot);
	sort(pivot+1, b);
}

int main() {
	int n; cin >> n;
	int ar[n];
	for (int i = 0; i < n; i++)
		cin >> ar[i];

	sort(ar, ar+n);

	for (int i = 0; i < n; i++)
		cout << ar[i] << ' '; cout << nl;
}
```


## Selection

```cpp
#include <iostream>
using namespace std;
#define nl '\n'

void sort(int *ar, int size) {
	if (!size) return;
	for (int i = size; i; i--) {
		int mx = 0;
		for (int j = 0; j < i; j++)
			if (ar[j] > ar[mx]) mx = j;
		swap(ar[mx], ar[i-1]);
	}
}

int main() {
	int n; cin >> n;
	int ar[n];
	for (int i = 0; i < n; i++)
		cin >> ar[i];

	sort(ar, n);

	for (int i = 0; i < n; i++)
		cout << ar[i] << ' '; cout << nl;
}
```
