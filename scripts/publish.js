import { publish } from 'gh-pages';

publish(
  'build',
  {
    branch: 'gh-pages',
    repo: 'git@github.com:simidzu2ay/simidzu2ay.github.io.git',
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);
