export const TRIAD = 3; // min nr of notes to form a chord

export type TNote =
    | "A"
    | "A#"
    | "B"
    | "C"
    | "C#"
    | "D"
    | "D#"
    | "E"
    | "F"
    | "F#"
    | "G"
    | "G#";

export interface IKey {
    note: TNote,
    sharp: boolean,
    octave?: number
}

export const octave: IKey[] = [
    {
        note: "A",
        sharp: false
    },
    {
        note: "A#",
        sharp: true
    },
    {
        note: "B",
        sharp: false
    },
    {
        note: "C",
        sharp: false
    },
    {
        note: "C#",
        sharp: true
    },
    {
        note: "D",
        sharp: false
    },
    {
        note: "D#",
        sharp: true
    },
    {
        note: "E",
        sharp: false
    },
    {
        note: "F",
        sharp: false
    },
    {
        note: "F#",
        sharp: true
    },
    {
        note: "G",
        sharp: false
    },
    {
        note: "G#",
        sharp: true
    },
]