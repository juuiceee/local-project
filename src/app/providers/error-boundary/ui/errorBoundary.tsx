import React, { ErrorInfo, PropsWithChildren, Suspense } from 'react';
import { PageError } from 'widgets/page-error';
import { PageLoader } from 'widgets/page-loader';

type TErrorBoundaryProps = PropsWithChildren<{}>;

type TErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<
  TErrorBoundaryProps,
  TErrorBoundaryState
> {
  constructor(props: TErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <Suspense fallback={<PageLoader />}>
          <PageError />
        </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
