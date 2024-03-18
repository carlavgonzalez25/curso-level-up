import { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: string;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: "" };
  }

  componentDidCatch(error: Error): void {
    this.setState({ error: `${error.name} : ${error.message}` });
    console.error(this.state.error);
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <div>Oops, there was an error, please try again later</div>;
    } else {
      return <>{this.props.children}</>;
    }
  }
}
