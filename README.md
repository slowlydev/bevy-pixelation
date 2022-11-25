# bevy-pixelation

My attempt to pixelate 3d objects with shaders and bevy in rust.

NOTE: this is only a tester there is no cool functionality yet.

## setup

### install rust/cargo/rustup

visit [this](https://www.rust-lang.org/tools/install) website to install rust and its tools

### clone repo

Clone the repo to get the code

```
git clone https://github.com/Slowlydev/bevy-pixelation.git
cd bevy-pixelation
```

### install deps and build

To install all dependencies and build a release version run:

```
cargo build --release
```

For development and auto-recompiling run:

```
cargo run
```

For only fetching deps run:

```
cargo fetch
```

For only building/compiling run:

```
cargo build
```

### start app

If u ran `cargo build --release` u can execute the file in `target/release/` after u copied the `assets` folder into the `target/release/` folder.

All the `platformer` executable needs is the assets folder in the same directory, so u could move it anywhere u want.

Or u can run `cargo run` to automatically compile and start automatically
