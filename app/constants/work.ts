import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2017-2020',
    title: 'MULTIMEDIA',
    subtitle: 'SMKN 6 SURABAYA',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2021-2025',
    title: 'TEKNIK INFORMATIKA',
    subtitle: 'Universitas Dr. Soetomo',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2024',
    title: 'FRONTEND INTERN',
    subtitle: 'BPSDMP KOMINFO SURABAYA',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: '?',
    subtitle: '???',
    position: 'right',
  }
]