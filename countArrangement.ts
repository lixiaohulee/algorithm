function countArrangement(n: number): number {
    let count = 0;

    const visit = Array(n+1);

    const backTrack = (track: number[], level: number): void => {
        if (track.length === n) {
            count++;
            return;
        }

        for (let i = 1; i < n+1; i++) {
            if (visit[i]) {
                continue;
            }

            if (i % level === 0 || level % i === 0) {
                track.push(i);
                visit[i] = true;

                backTrack(track, level+1);

                track.pop();
                visit[i] = false;
            }
        }
    }

    backTrack([], 1);

    return count;
};
